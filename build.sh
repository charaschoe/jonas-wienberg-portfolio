#!/bin/bash
set -e

# Set environment variables
export NITRO_PRESET=vercel
export NODE_ENV=production
export COMPATIBILITY_DATE=2025-03-13

# Build the application in SPA mode
npx nuxt generate --spa

# Output success message
echo "Build completed successfully!" 