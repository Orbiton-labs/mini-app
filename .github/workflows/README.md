# Vercel Deployment Workflows

This project uses GitHub Actions to deploy to Vercel based on tags and releases instead of the default branch-based deployments.

## Setup Instructions

### 1. Vercel CLI Setup

To configure the project for tag-based deployments:

1. Install Vercel CLI locally:
   ```bash
   pnpm add --global vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Link your project:
   ```bash
   vercel link
   ```

4. This will create a `.vercel` directory with a `project.json` file containing your `orgId` and `projectId`

### 2. GitHub Secrets Setup

Add the following secrets to your GitHub repository:

1. `VERCEL_TOKEN`: Your Vercel access token (generate at https://vercel.com/account/tokens)
2. `VERCEL_ORG_ID`: Your organization ID from `.vercel/project.json`
3. `VERCEL_PROJECT_ID`: Your project ID from `.vercel/project.json`
4. `NPM_TOKEN`: Your npm authentication token (required for package installation)

To get an NPM token:

1. Log in to npm:
   ```bash
   npm login
   ```

2. Create a new access token at https://www.npmjs.com/settings/[your-username]/tokens
   - Or extract your token from your local `.npmrc` file:
     ```bash
     cat ~/.npmrc
     ```
     Look for a line like `//registry.npmjs.org/:_authToken=npm_xxxxxx`

## Deployment Workflows

### Production Deployment

Production deployments are triggered automatically when you push a new tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

### Hotfix Deployment

To deploy a hotfix directly to production:

1. Create and push to the `hotfix` branch:
   ```bash
   git checkout -b hotfix
   # Make your changes
   git add .
   git commit -m "Fix critical issue"
   git push origin hotfix
   ```

2. The hotfix will automatically deploy to production.

### Preview Deployments

Preview deployments are created automatically when pull requests are opened or updated, and the preview URL will be posted as a comment in the PR. 