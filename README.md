# One-Click Deploy (Vercel)

This repository is set up for easy deployment to Vercel. Use the button below to import the project into Vercel and deploy in one click — replace the placeholder repo URL with your GitHub repo URL.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/<OWNER>/<REPO>)

Quick manual steps

1. Replace the `<OWNER>/<REPO>` portion in the button link above with your GitHub repository (or click the button and paste the repo URL when prompted).
2. In the Vercel Import screen set the following:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Framework Preset:** (optional) leave as `Other` or let Vercel auto-detect
3. In Project Settings → Environment, set **Node.js Version** to `24.x` to match `package.json`.
4. Add the required environment variables (Project → Settings → Environment Variables):
   - `VITE_SUPABASE_URL` — your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` — your Supabase anon/public key
   - Any other `VITE_` prefixed variables your deployment needs
5. Click **Deploy**.

Validation checklist after deploy

- Confirm build logs show `npm run build` and output to `dist`.
- Open the deployed site and inspect the browser console for runtime errors.
- Verify static assets load (no 401/404 for `/assets/...` or `/vite.svg`).
- Test key flows that require Supabase (login, patient lists) to ensure env vars are correct.

Notes

- `vercel.json` in this repo is minimal (no `builds`) so Vercel's Project Settings control the build command and Node version. If you prefer to declare builds in `vercel.json`, you can add a `builds` entry instead.
- If you want me to watch the deploy and validate logs, share the Vercel deployment URL or add me to the project's deployment logs access and I will review.