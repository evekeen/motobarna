# Publish MotoBarna to GitHub Pages on motobarna.com

## Context

The MotoBarna landing page is an Astro static site (`output: "static"`, `site: "https://motobarna.com"`) that has never been deployed. The repo is at `github.com/evekeen/motobarna` and the user owns `motobarna.com`. Goal: serve the production build at `https://motobarna.com` with `www.motobarna.com` redirecting to apex, via GitHub Pages.

## Approach

- **Hosting source:** GitHub Actions (not gh-pages branch, not `/docs`). Cleaner git history, no committed build artifacts, standard for Astro on Pages.
- **Domain:** apex `motobarna.com` as primary; `www.motobarna.com` 301-redirects to apex (GitHub handles the redirect automatically once apex is set as the custom domain).
- **Deploy trigger:** push to `main` + manual `workflow_dispatch`. Solo project, low traffic, no need for tag-based releases.
- **PR guard:** separate workflow runs `npm ci` + `npm run build` (which already runs `astro check`) on every PR. Catches type and build errors before merge.
- **CNAME in repo:** `public/CNAME` ships with every build so the custom domain survives a Pages settings reset.
- **No `base` config needed:** apex domain serves from root, so Astro's default absolute paths (`/_astro/...`, `/images/...`) work as-is.
- **No `.nojekyll` needed:** the artifact-based Pages API (`actions/deploy-pages`) serves the tarball verbatim and never invokes Jekyll. Jekyll only runs on branch-based deploys.

## Files

- `.github/workflows/deploy.yml` — new — build + deploy to Pages on push to main / manual dispatch
- `.github/workflows/ci.yml` — new — build + astro check on pull requests, no deploy
- `public/CNAME` — new — single line: `motobarna.com`
- `README.md` — update — add a short "Deployment" section pointing to this plan

## Tasks

### Task 1: Add CNAME
- [ ] Create `public/CNAME` containing exactly `motobarna.com`
- [ ] Run `npm run build` and confirm `dist/CNAME` exists in the output

### Task 2: Add production deploy workflow
- [ ] Create `.github/workflows/deploy.yml` with:
  - triggers: `push` to `main`, `workflow_dispatch`
  - permissions: `contents: read`, `pages: write`, `id-token: write`
  - concurrency group `pages`, `cancel-in-progress: false`
  - jobs:
    - `build`: checkout → `actions/setup-node@v4` with Node 22 and `cache: npm` → `npm ci` → `npm run build` → `actions/configure-pages@v5` → `actions/upload-pages-artifact@v3` with path `./dist`
    - `deploy`: `needs: build`, environment `github-pages` with `url` from deploy step, runs `actions/deploy-pages@v4`
- [ ] Validate YAML locally (e.g. `yq '.' .github/workflows/deploy.yml > /dev/null` or just open in editor)

### Task 3: Add PR CI workflow
- [ ] Create `.github/workflows/ci.yml` with:
  - trigger: `pull_request`
  - single job: checkout → setup Node 22 with `cache: npm` → `npm ci` → `npm run build`
- [ ] Validate YAML

### Task 4: Update README
- [ ] Add a "Deployment" section noting: site auto-deploys from `main` via GitHub Actions; custom domain `motobarna.com`; DNS records + Pages settings documented in `docs/plans/2026-05-25-github-pages-deployment.md`

### Task 5: Pre-merge local validation
- [ ] Run `npm run build` — succeeds
- [ ] Run `npm run preview`, open `http://localhost:4321` — pages render, images load, no console errors
- [ ] Confirm `dist/CNAME`, `dist/sitemap-index.xml`, `dist/robots.txt`, `dist/ru/index.html` all exist

### Task 6: GitHub repo configuration (manual, in browser)
- [ ] **First:** `Settings → Pages → Build and deployment → Source` = **GitHub Actions**. This must happen *before* the first workflow run, or `actions/configure-pages@v5` fails with "Get Pages site failed".
- [ ] Then land the workflow + CNAME files on `main`
- [ ] Confirm the first workflow run (from the merge) succeeds in the Actions tab
- [ ] Optionally: `Settings → Pages → Verified domains` — add the TXT record GitHub provides to lock the domain to this account

### Task 7: DNS configuration (manual, at registrar)
- [ ] Remove any existing A/AAAA/CNAME records on `motobarna.com` and `www.motobarna.com` that conflict
- [ ] Add four A records on apex `motobarna.com`:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- [ ] Add four AAAA records on apex `motobarna.com`:
  - `2606:50c0:8000::153`
  - `2606:50c0:8001::153`
  - `2606:50c0:8002::153`
  - `2606:50c0:8003::153`
- [ ] Add CNAME on `www.motobarna.com` → `evekeen.github.io`
- [ ] Verify propagation: `dig motobarna.com +short` returns the four GitHub IPs; `dig www.motobarna.com +short` returns `evekeen.github.io.` and the GitHub IPs

### Task 8: Wire custom domain in GitHub
- [ ] **Gate:** before touching Pages settings, confirm `dig motobarna.com +short` returns the four GitHub IPs. Setting the custom domain in the UI before DNS resolves can cause GitHub to rewrite or strip the CNAME on deploys until propagation catches up.
- [ ] `Settings → Pages → Custom domain` = `motobarna.com` → save
- [ ] Wait for DNS check to pass (green checkmark) and cert provisioning to complete — can take 10–60 minutes
- [ ] When "Your site is published at https://motobarna.com" appears, tick **Enforce HTTPS**

### Task 9: Production smoke tests
- [ ] `curl -I https://motobarna.com` → `200`, `strict-transport-security` header present
- [ ] `curl -I https://www.motobarna.com` → `301` with `location: https://motobarna.com/`
- [ ] `curl -I http://motobarna.com` → `301` to `https://motobarna.com/`
- [ ] Open `https://motobarna.com/` in a browser — landing page renders, images load, Telegram CTA works
- [ ] Open `https://motobarna.com/ru/` — Russian route loads
- [ ] Open `https://motobarna.com/sitemap-index.xml` — returns XML
- [ ] Open `https://motobarna.com/robots.txt` — returns text and references the sitemap

### Task 10: Full validation
- [ ] Run `npm run check` locally — no errors
- [ ] Confirm both workflows are green on the latest commit to `main`
- [ ] Confirm Pages settings show "Your site is published at https://motobarna.com" with HTTPS enforced
