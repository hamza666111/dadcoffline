# Deploying to Vercel

Steps to deploy this Vite + React project to Vercel:

1. Create a new Vercel project and connect the Git repository.
2. Vercel will detect a static build. It runs `npm run build` by default.
3. Ensure the following environment variables are set in the Vercel dashboard (Project Settings → Environment Variables):
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon/public key

4. The repo includes `vercel.json` which sets the static build output to `dist` and adds a SPA fallback to `index.html`.
5. Trigger a deployment (push to main or use Vercel UI). The site will be served from the built `dist` files.

Notes & tips
- Do NOT commit secret keys in the repo. Use Vercel's environment settings for production secrets.
- If you need a different Node version, add an `engines.node` field in `package.json`.
- If you want type-checking on deploy, enable a pre-build step in Vercel settings to run `npm run typecheck`.
