# SPMUN '26 Website

Static, responsive SPMUN '26 website based on the approved homepage direction and the supplied SPMUN brochure/delegate handbook.

## Quick start

No Node.js or build system is required.

Open `index.html` in a browser to preview the site.

## Main editable file

Edit `config.js` for conference details that are expected to change:

- registration URL
- registration fee
- payment UPI ID
- payment QR path
- registration deadline
- phone/email
- Instagram handle
- venue note
- leadership placeholders

Replace `assets/images/payment-qr-placeholder.svg` with the official QR image and update `paymentQr` in `config.js` if the filename changes.

## Included documents

- `assets/docs/SPMUN26_Brochure_V3.pdf`
- `assets/docs/SPMUN26_Delegate_Handbook_V3.pdf`

## Deployment recommendation

GitHub is the source repository and Netlify is the hosting/deployment layer.

1. Create a GitHub repository, e.g. `spmun26-website`.
2. Upload the contents of this folder to the repository.
3. Create a Netlify account.
4. In Netlify choose **Add new project → Import an existing project**.
5. Select GitHub and authorize Netlify.
6. Select the SPMUN repository.
7. For this static site, leave build command empty and use the repository root as the publish directory.
8. Click **Publish**.
9. Netlify will provide a temporary `*.netlify.app` address.
10. Add your custom domain under **Domain management → Production domains**.

## Updating after launch

For simple content changes, edit `config.js` in GitHub and commit the change. Netlify will automatically create a new production deploy when connected to the repository.

For design/code changes, edit `index.html`, `styles.css` or `script.js`, commit, and let Netlify redeploy.

## Important pre-launch items

Resolve before public launch:

- whether International Press Corps is officially a fifth committee
- registration URL
- registration fee
- official payment QR / UPI ID
- country/portfolio matrix
- exact school address and map
- Secretariat names and photographs
- Secretary General message
- AIPPM language
- cash-prize amounts
- official Instagram handle
- committee room numbers
