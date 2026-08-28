# SPMUN '26 — Content Editing Guide

## Change the registration fee

Open `config.js` and change:

`registrationFee: "₹ XXX"`

to the final amount.

## Change the registration URL

Change:

`registrationUrl: "#register"`

to the actual registration URL.

## Change the payment QR

Replace `assets/images/payment-qr-placeholder.svg` with the official QR image. Then change `paymentQr` in `config.js` to the new file path.

## Change contact details

Edit `contactPhone`, `emails`, `instagram`, and `address` in `config.js`.

## Add Secretariat names

The page currently intentionally shows placeholders for names that were not finalized in the supplied source material. Add the final names to `config.js` and extend the Secretariat section in `index.html` when the final team structure is known.

## Change the design

Use `styles.css`. The main colour variables are at the top of the file.
