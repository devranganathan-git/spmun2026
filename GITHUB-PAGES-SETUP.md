# SPMUN '26 — GitHub Pages Trial Setup

This package is prepared for a GitHub Pages **project site**.

## Repository

Recommended repository name:

`spmun2026`

Put the contents of this package at the **top level** of the repository. `index.html` must be in the repository root.

## Publish

In GitHub:

1. Open the `spmun2026` repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**.
5. Click **Save**.
6. Wait for GitHub Pages to publish, then click **Visit site**.

The expected URL is:

`https://YOUR-GITHUB-USERNAME.github.io/spmun2026/`

GitHub Pages may take several minutes to publish after the first deployment.

## Important

- Keep `.nojekyll` in the repository root.
- Keep `index.html` in the repository root.
- Keep the `assets/` directory structure unchanged.
- All website asset references are relative so the site works under `/spmun2026/`.
- The current QR code is a placeholder. Replace it before publishing a real registration/payment flow.
- Do not put passwords, private keys, payment credentials, or other secrets in this repository. GitHub Pages sites are publicly accessible.

## Updating the site

For simple conference-content changes, edit `config.js` and commit the change. GitHub Pages will republish the updated site automatically from the configured branch.
