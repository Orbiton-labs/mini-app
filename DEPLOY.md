# Deployment Guide

This project uses tag-based deployments with Vercel and GitHub Actions for CI/CD.

## Quick Start

### Initial Setup

Before your first deployment:

1. Install and login to Vercel CLI locally:
   ```bash
   pnpm add --global vercel
   vercel login
   ```

2. Link your project to get the organization and project IDs:
   ```bash
   vercel link
   ```

3. Add the following secrets to your GitHub repository:
   - `VERCEL_TOKEN`: Generate at https://vercel.com/account/tokens
   - `VERCEL_ORG_ID`: From `.vercel/project.json`
   - `VERCEL_PROJECT_ID`: From `.vercel/project.json`

### Deploying to Production

To deploy to production, create and push a new tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

### Creating a Hotfix

For urgent fixes:

```bash
git checkout -b hotfix
# Make your changes
git commit -am "Fix critical issue"
git push origin hotfix
```

### Preview Deployments

Pull requests automatically get preview deployments. The URL will be posted as a comment in the PR.

## How It Works

- The `vercel.json` file disables the default auto-deployments
- GitHub Actions workflows handle deployments based on tags and branches
- Production deployments are triggered by pushing tags
- Hotfixes are deployed from the `hotfix` branch
- Preview deployments are created for pull requests

For more details, see `.github/workflows/README.md` 