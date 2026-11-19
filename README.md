# Six Details. One Checkout. — Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/six-details-one-checkout/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreated from the uploaded 77.2-second, 720×1280, 30fps video.

## Six details transcribed from the video

1. **DETAIL 01 — EXPRESS PAY**
   - Headline: “Fastest path first.”
   - Wallet button is placed before the card form.
   - Callout: `35 keys skipped with one tap`.
   - Rationale: People who can skip the form do; the wallet already knows email, card and expiry.
   - Rule: Put the fastest path at the top.

2. **DETAIL 02 — GUEST BY DEFAULT**
   - Headline: “No account wall.”
   - Guest checkout is selected by default; Sign in is optional.
   - Callout: `0 passwords needed to pay`.
   - Rationale: Forced sign-up is a major reason people abandon carts; a password is a chore, not a purchase.
   - Rule: Offer the account after they pay.

3. **DETAIL 03 — LIVE FORMATTING**
   - Headline: “Format as they type.”
   - Card digits group in fours, expiry and CVC are separate fields.
   - Callout: `4 groups of 4, brand from digit 1`.
   - Rationale: Groups of four match the card in your hand; the brand confirms it is being read right.

4. **DETAIL 04 — TRUST IN PLACE**
   - Headline: “Calm the worry where it starts.”
   - Trust statement sits immediately under the card fields: `Encrypted. We never store your card.`
   - Callout: `12px from the card field`.
   - Rationale: Doubt peaks when a card number goes in; a lock in the footer is never read at that moment.
   - Rule: Put trust signals at the moment of doubt.

5. **DETAIL 05 — A REAL DATE**
   - Headline: “A date, not a range.”
   - Shipping displays a specific arrival date rather than a broad delivery window.
   - Rationale: A range makes people guess; a date is something people can plan around.
   - Rule: Show the delivery date, not the math.

6. **DETAIL 06 — PRICE ON THE BUTTON**
   - Headline: “No surprise at the last tap.”
   - Final CTA says `Pay $84.00`.
   - Callout: `56px tall · says $84.00`.
   - Rationale: The total on the label is a promise; the button is sticky at the bottom and sits under the thumb.
   - Rule: Put the full total on the final button.

## Included interactions
- Previous / Next detail controls and six-step progress indicator.
- Guest checkout / Sign in toggle.
- Live card-number grouping and basic brand hint.
- Expiry date formatting and numeric CVC input.
- Express pay and Pay buttons show demo-only messages.
- Delivery estimate uses a date calculated at runtime.

## Run locally
No dependencies or build step required:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Files
- `index.html` — checkout layout and six-detail explainer
- `styles.css` — responsive dark checkout design
- `app.js` — interactions and live formatting
- `README.md` — video-derived details and instructions

## Important safety / source accuracy note
This is a front-end prototype only. It does not process payments, contact a payment gateway, or transmit/store card details. The sample amount and sample card placeholder mirror the video. The video does not provide the original creator's complete HTML/CSS/JS; this project is a new implementation based on visible UI, text, and interactions. The shipping date is generated as a real date seven days from the visitor's current date, rather than copying the video's example date.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
