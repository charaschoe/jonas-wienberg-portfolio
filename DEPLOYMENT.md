# Deploying Your Portfolio with Vercel Analytics

This guide will help you deploy your portfolio to Vercel and start collecting visitor analytics.

## Prerequisites

-   A Vercel account (you can sign up at [vercel.com](https://vercel.com))
-   Git installed on your computer

## Deployment Steps

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Connect your repository to Vercel**:

    - Go to [vercel.com](https://vercel.com) and log in
    - Click "Add New..." and select "Project"
    - Import your Git repository
    - Configure your project settings (the defaults should work fine)
    - Click "Deploy"

3. **Verify Analytics is Working**:
    - After deployment, visit your site
    - Navigate between a few pages
    - Go to your Vercel dashboard
    - Click on your project
    - Click on "Analytics" in the sidebar
    - You should start seeing data within 30 seconds

## Troubleshooting

If you don't see analytics data:

-   Make sure you don't have an ad blocker or content blocker enabled
-   Verify that the Analytics component is properly imported in app.vue
-   Check the browser console for any errors

## Manual Deployment (Alternative)

If you prefer to deploy from your local machine:

```bash
# Install Vercel CLI
npm install -g vercel

# Log in to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Analytics Features

Vercel Analytics provides:

-   Page views and unique visitors
-   Top pages
-   Referral sources
-   Geographic data
-   Device and browser information

All without compromising user privacy or requiring cookie consent banners.
