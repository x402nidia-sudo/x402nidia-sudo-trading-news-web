# Trading News — Web

A multilingual website for buying asset news reports with Algorand USDC through x402.

Users connect a Pera wallet, select one of 49 assets and purchase a report containing ranked news, source links, publication dates and selection explanations. Version 5.2 displays a report ordered entirely by explainable rules, without OpenAI or a new BUY / SELL / HOLD recommendation.

- Backend repository: https://github.com/x402nidia-sudo/X402-Trading-news
- API base URL: https://x402-trading-news.onrender.com
- API for agents: https://x402-trading-news.onrender.com/docs

## Version requirement

Extract `web_sin_openai.zip` at the root of `x402nidia-sudo/x402nidia-sudo-trading-news-web`, replacing `index.html`, `app.js` and `README.md`. Use backend version **5.2**. Keep the existing `style.css`, `wallet.js` and `THIRD_PARTY_LICENSES.txt`.

The update retains the configurable price, blue design, wallet connection, circular progress indicator and red Algorand payment notice. Updating the README alone does not change application behavior.

## Features

- English by default, with Spanish, French and German language selectors.
- Blue interface, responsive layout and a Connect wallet button with disconnect support.
- A red notice below Connect wallet explaining that payment requires USDC on Algorand.
- A price obtained from the backend's `PRICE_USDC` setting; default: **0.199 USDC** per report.
- Confirmation of the recipient, report price and customer network fee before wallet signing.
- A circular progress indicator with translated payment and report-creation states.
- A rule-based report heading, with the highest-priority story first and the selection explanation in the selected language.
- Ranked stories, dates, source links, the five priority components and JSON report download.
- Recovery of an interrupted purchase using the original signed request.
- An **API for agents** button opening the existing backend documentation.

News headlines and excerpts retain their source language. Priority scores combine relevance (35), recency (25), predefined source priority (15), event (15) and coverage (10). They are not expected returns or trading signals. A recovered historical purchase still displays its originally stored assessment, if present, without making an OpenAI request.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure |
| `style.css` | Blue theme, layout and payment/report states |
| `app.js` | Translations, backend requests, checkout and report display |
| `wallet.js` | Prebuilt wallet integration and payment validation |
| `THIRD_PARTY_LICENSES.txt` | Notices for bundled dependencies |

These files are served directly. This repository does not need an npm install or a JavaScript compilation step for deployment.

## Deploy on Render

Create a **Static Site** for this repository. The existing `x402-trading-news` Web Service remains the Python API; do not repoint it to the frontend repository.

1. In the Render Dashboard, select **New → Static Site**.
2. Connect `x402nidia-sudo/x402nidia-sudo-trading-news-web`.
3. Use the following settings:

| Render field | Value |
|---|---|
| Repository | `https://github.com/x402nidia-sudo/x402nidia-sudo-trading-news-web` |
| Branch | `main` |
| Root Directory | Leave empty |
| Build Command | `true` |
| Publish Directory | `.` |

`true` is a successful no-op command because the deployable files already exist at the repository root. No Start Command is needed for a Static Site.

4. Create the site and copy its actual HTTPS URL from Render.
5. In the **backend** service, set `WEB_ORIGINS` to that exact origin, without a trailing slash or path, and redeploy the backend.
6. Open the website and confirm that the asset list and configured price load. Purchases require a correctly configured, deployed backend with payments enabled.

Static sites can use Render's free hosting, subject to its usage limits. The backend's persistent-storage and provider requirements are separate.

## Backend connection

The production API URL is configured in `app.js`:

```js
const API = 'https://x402-trading-news.onrender.com';
```

The frontend also validates Algorand Mainnet, USDC asset `31566704`, the backend's advertised atomic price and the pinned receiving address before signing. The unsigned quote must agree with the configuration shown to the customer.

Keep the existing backend URL when updating its Render runtime/source. That preserves both this connection and the registered `/api/v1/market-signal/{symbol}` resource URLs.

Provider keys and `PRICE_USDC` belong in the **backend's** Render Environment settings. Remove the obsolete `OPENAI_API_KEY`, `OPENAI_MODEL`, `AI_RERANK` and `AI_DAILY_LIMIT` variables; version 5.2 ignores them. The browser reads only public configuration. A plain static deployment does not automatically substitute Render environment variables into `app.js`.

## Purchase flow

1. Connect a supported Algorand wallet through Pera and choose an asset.
2. Click **Buy report**. The backend checks that today's relevant news can be retrieved and ranked before requesting a signature.
3. Review the USDC amount, recipient and network fee.
4. Approve the exact transaction in the wallet.
5. The website sends the signed x402 payload to the selected asset's existing paid API route.
6. After a confirmed settlement response, the website displays the report and its receipt.

The backend prepares and validates content before settlement to avoid charging for an unavailable report. The waiting messages do not mean that an empty report has already been paid for.

The wallet needs **USDC on Algorand**, with the USDC asset opted in. USDC on another network cannot be used directly by this checkout. Automatic swaps, cross-network transfers and card payments are not implemented.

Network fees are shown separately. Fee sponsorship depends on what the facilitator advertises; the website does not promise that every payment is sponsored.

## Recover an interrupted purchase

Use **Recover report** to resend the original signed purchase request. The backend stores the report and receipt and prevents a second settlement of that same purchase.

Keep browser storage available until the result is known. The recovery JSON file contains the signed request needed to retrieve the purchased report; keep it private. Avoid making a new purchase to resolve an uncertain payment.

## Local preview

Run this command in the repository root:

```bash
python -m http.server 8080
```

Open http://127.0.0.1:8080 in your browser. This frontend still calls the production API. For browser requests to work, the backend's `WEB_ORIGINS` must temporarily include `http://127.0.0.1:8080` or `http://localhost:8080`, matching the address you actually use. Wallet connection and purchases require compatible wallet support and the real backend configuration; a local preview is not a payment sandbox.

## Troubleshooting

| Symptom | Check |
|---|---|
| Service configuration could not be verified | Deploy backend 5.2 and the matching frontend together; confirm API URL, Mainnet asset, recipient and public price configuration. |
| Browser requests fail | Ensure the actual frontend origin is in backend `WEB_ORIGINS`, then redeploy the backend. |
| No relevant news or sources unavailable | Configure at least one news provider and inspect its availability/quota on the backend. |
| Wallet does not complete the request | Check the wallet connection, Algorand USDC balance, USDC opt-in and any displayed network fee. |
| Price changed in Render | Reload the website to fetch the updated configuration before preparing a new payment. |
| A purchase is pending | Recover the same report; do not authorize a replacement payment merely because the first response was interrupted. |

All 15 JavaScript/UI/wallet checks passed using mocked API/wallet responses. No real payment was made. Live wallet behavior, visual layout and real settlement must still be verified after deployment.

Render references: [Static Sites](https://render.com/docs/static-sites), [Git provider connection](https://render.com/docs/git-provider).
