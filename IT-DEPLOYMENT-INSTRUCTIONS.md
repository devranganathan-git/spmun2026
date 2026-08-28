# SPMUN '26 Website — IT Deployment Instructions

## Objective

Deploy the SPMUN '26 static website as a subdirectory of the existing St. Patrick Higher Secondary School website:

**https://www.st-patricksschool.com/spmun2026/**

The existing school website must remain unchanged.

## Important: do not deploy until the SPMUN team approves the package

This package is the current website V1 baseline. Some conference information is intentionally still configurable/placeheld (for example registration fee, registration URL, payment QR, Secretariat names and exact address).

## Recommended deployment method

Use the school's existing web hosting. No new domain and no separate hosting account are required.

### Step 1 — Identify the web root

Log in to the school's hosting control panel (typically cPanel or Plesk) or use the school's normal FTP/SFTP access.

Locate the document/web root for `www.st-patricksschool.com`. On cPanel this is commonly `public_html/`, but **do not assume this** if the domain is configured with a different document root.

### Step 2 — Back up the existing site

Before making any changes, take or confirm a current backup of the school's website.

Do not overwrite, rename or delete any existing school website files.

### Step 3 — Create the SPMUN directory

Inside the school's web root, create:

`spmun2026`

The intended structure is:

```text
<school-web-root>/
├── existing school website files and folders
└── spmun2026/
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── config.js
    └── assets/
```

### Step 4 — Upload the package contents

Upload the **contents of this package**, not an additional `spmun26-site` parent directory, into the new `spmun2026` folder.

The final URL should therefore resolve to:

`https://www.st-patricksschool.com/spmun2026/`

and the file:

`<school-web-root>/spmun2026/index.html`

must be the SPMUN landing page.

### Step 5 — Verify permissions

For a typical Linux hosting environment:

- Files: readable by the web server (commonly 644)
- Directories: executable/readable by the web server (commonly 755)

Use the school's existing hosting conventions if they differ.

### Step 6 — Test the live URL

Open:

`https://www.st-patricksschool.com/spmun2026/`

Verify that:

- Homepage loads
- CSS styling loads correctly
- School crest displays
- Navigation works
- Committee sections display
- Delegate Hub displays
- Delegate Handbook PDF opens
- Brochure PDF opens
- Payment QR placeholder displays
- Contact email links work
- Phone link works on mobile
- The existing school homepage and other pages are unaffected

### Step 7 — Test on mobile

Test the same URL on an iPhone/iPad and at least one Android device if available.

Check the mobile navigation, text wrapping, committee cards, registration section and PDF links.

## Updating conference information later

Most changing conference information is centralized in:

`config.js`

Examples include:

- Registration URL
- Registration fee
- Payment UPI ID
- Payment QR image path
- Registration deadline
- Phone number
- Email addresses
- Instagram handle
- Venue/address note
- Secretary General name
- Director General name
- AIPPM language

For a content-only change, the SPMUN team can provide an updated `config.js`. Replace the existing file at:

`/spmun2026/config.js`

and reload the website.

For a new design/functionality version, replace the SPMUN package contents with the new approved version supplied by the SPMUN team. **Do not replace or modify the parent school website files.**

## If the school uses WordPress

Do not install these files into the WordPress theme or modify WordPress core files.

Ask the website administrator whether the server allows a static subdirectory under the domain's document root. If yes, use the `/spmun2026/` directory approach above. If not, stop and contact the SPMUN website owner before making changes.

## If the school uses a CDN, reverse proxy, or special routing

The intended requirement remains:

`/spmun2026/` → static SPMUN site

Ask the administrator to preserve the existing site's routing and HTTPS configuration. Do not change the root domain routing.

## Rollback

If anything goes wrong, remove only the newly created `/spmun2026/` directory and restore it from the backup/package. The parent school website should remain untouched.

## Final handover

Please provide the SPMUN team with:

1. Confirmation that `/spmun2026/` is live
2. The final live URL
3. The hosting/control-panel type (cPanel/Plesk/other)
4. Confirmation that a backup exists
5. Any restrictions on future updates
6. The method the school IT team prefers for receiving future website updates

## Package contents

- `index.html` — website page
- `styles.css` — styling
- `script.js` — page behavior
- `config.js` — editable conference configuration
- `assets/images/` — site imagery and payment QR placeholder
- `assets/docs/` — brochure and delegate handbook PDFs
- `README.md` — project overview
- `CONTENT-EDITING.md` — content update notes
