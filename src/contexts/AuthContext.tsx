import { createContext, useContext, useEffect, useState, ReactNode, useCallback, useRef } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { UserProfile } from '../lib/types';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const isSigningInRef = useRef(false);

  const fetchProfile = useCallback(async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('users_profile')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);

        if (error.message?.includes('Invalid Refresh Token') || error.message?.includes('JWT') || error.message?.includes('Refresh Token Not Found')) {
          console.log('Auth error in profile fetch, signing out');
          localStorage.removeItem('supabase.auth.token');
          await supabase.auth.signOut({ scope: 'local' });
          return null;
        }

        return null;
      }

      if (data) {
        setProfile(data as UserProfile);
        return data;
      }
      return null;
    } catch (err) {
      console.error('Profile fetch exception:', err);
      return null;
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    if (user) {
      await fetchProfile(user.id);
    }
  }, [user, fetchProfile]);

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        const { data: { session: currentSession }, error: sessionError } = await supabase.auth.getSession();

        if (!mounted) return;

        if (sessionError) {
          console.error('Session error:', sessionError);
          if (sessionError.message?.includes('Invalid Refresh Token') || sessionError.message?.includes('JWT') || sessionError.message?.includes('Refresh Token Not Found')) {
            console.log('Invalid session detected, clearing auth state');
            localStorage.removeItem('supabase.auth.token');
            await supabase.auth.signOut({ scope: 'local' });
            setSession(null);
            setUser(null);
            setProfile(null);
          }
        } else if (currentSession?.user) {
          setSession(currentSession);
          setUser(currentSession.user);
          await fetchProfile(currentSession.user.id);
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
        localStorage.removeItem('supabase.auth.token');
        await supabase.auth.signOut({ scope: 'local' });
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      if (!mounted || isSigningInRef.current) return;

      if (event === 'TOKEN_REFRESHED') {
        if (newSession?.user) {
          setSession(newSession);
          setUser(newSession.user);
        }
        return;
      }

      if (event === 'SIGNED_IN') {
        return;
      }

      setSession(newSession);
      setUser(newSession?.user ?? null);

      if (newSession?.user && event !== 'SIGNED_IN') {
        await fetchProfile(newSession.user.id);
      } else if (!newSession) {
        setProfile(null);
      }

      if (event === 'SIGNED_OUT') {
        setProfile(null);
        setUser(null);
        setSession(null);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

  const signIn = async (email: string, password: string): Promise<{ error: Error | null }> => {
    try {
      isSigningInRef.current = true;

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        console.error('Sign in error:', error);
        isSigningInRef.current = false;
        return { error: new Error(error.message) };
      }

      if (!data.user) {
        isSigningInRef.current = false;
        return { error: new Error('No user returned from sign in') };
      }

      try {
        const { data: profileData, error: profileError } = await supabase
          .from('users_profile')
          .select('*')
          .eq('id', data.user.id)
          .maybeSingle();

        if (profileError) {
          console.error('Profile fetch error during sign in:', profileError);
          await supabase.auth.signOut();
          isSigningInRef.current = false;
          return { error: new Error('Unable to load user profile. Please try again.') };
        }

          if (!profileData) {
            await supabase.auth.signOut();
            isSigningInRef.current = false;
            return { error: new Error('User profile not found. Please contact administrator.') };
          }

          if (!profileData.is_active) {
            await supabase.auth.signOut();
            isSigningInRef.current = false;
            return { error: new Error('Your account has been deactivated. Please contact administrator.') };
          }

          // Ensure local auth state updates immediately after sign-in so
          // components (e.g. StaffLoginPage) that watch `user` can react
          // without requiring a full page refresh. The onAuthStateChange
          // handler is temporarily ignored during sign-in via
          // `isSigningInRef`, so set `session` and `user` directly here.
          try {
            if (data?.session) setSession(data.session as Session);
            if (data?.user) setUser(data.user as User);
          } catch (e) {
            // swallow — state updates are best-effort here
          }

          setProfile(profileData as UserProfile);
          isSigningInRef.current = false;
          return { error: null };
      } catch (profileErr) {
        console.error('Profile fetch exception during sign in:', profileErr);
        await supabase.auth.signOut();
        isSigningInRef.current = false;
        return { error: new Error('Failed to load user profile. Please try again.') };
      }
    } catch (err) {
      console.error('Sign in exception:', err);
      isSigningInRef.current = false;
      return { error: err instanceof Error ? err : new Error('An unexpected error occurred') };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setProfile(null);
      setUser(null);
      setSession(null);
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, profile, loading, signIn, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
