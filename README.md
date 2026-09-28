# Trading News — Web

A multilingual website for purchasing explainable crypto news reports with USDC on Algorand through x402.

Choose a coin and an importance level, check whether relevant news is available today, and buy the matching report. Each story provides context, dates, sources, extracted key points and an indicative BUY / SELL / HOLD interpretation based on explicit rules.

This README describes the current website paired with backend **5.7.0**.

| Resource | Link |
|---|---|
| Website | [trading-news-web.onrender.com](https://trading-news-web.onrender.com/) |
| Backend repository | [X402-Trading-news](https://github.com/x402nidia-sudo/X402-Trading-news) |
| API | [x402-trading-news.onrender.com](https://x402-trading-news.onrender.com/) |
| API for agents | [Interactive documentation](https://x402-trading-news.onrender.com/docs) |

## User experience

The website keeps its blue design and offers English by default, with Spanish, French and German in a flag dropdown. News headlines and excerpts remain in their original language; changing the interface language does not translate publisher content.

The purchase flow has four numbered steps:

1. **Connect wallet.** The current integration uses Pera Wallet on Algorand Mainnet. Ledger-backed accounts can be used through Pera. Connecting is separate from authorizing a payment.
2. **Select your coin.** The selector starts empty and offers 49 assets, including Bitcoin, Ethereum and Algorand.
3. **Select importance.** Choose all levels, red, orange or yellow. A selected color matches that exact category.
4. **Buy report.** The configured price is **0.2 USDC**. The button becomes available after the service confirms matching news and the payment state allows a purchase.

Steps 2, 3 and 4 share a compact row. Selecting a coin or changing importance automatically checks availability. Available news is highlighted in red. Empty results and failed queries have distinct messages; today's headlines are not disclosed by the free check.

Before signing, the checkout shows the report price, recipient and customer network fee. The wallet needs USDC on **Algorand**, with USDC opted in and sufficient available balance. USDC on another chain cannot be used directly. Cross-chain conversion is not implemented.

The full 0.2 USDC report price goes to the configured recipient. This implementation does not split out a 0.001 USDC competition fee. Algorand network fees are separate; they are sponsored when supported by the facilitator's advertised configuration, otherwise displayed before signing.

The present wallet integration uses the first account returned by Pera. It does not yet offer a separate account picker or a multi-wallet provider selector. Click the connected address to access **Disconnect**.

## Reports and news cards

After successful settlement, a circular progress state leads to the purchased report and payment receipt. The report includes the highest-ranked matching story, other stories ordered by relevance, score explanations, publication dates and provider status. It can be downloaded as JSON without another purchase.

Story importance is shown with **red, orange and yellow icons**. Opening a story displays a generated HTML card containing the coin, publication date and time, importance, indicative signal, extracted key points and the reason for its classification. The original publisher link appears inside that card.

The backend ranks news using asset relevance, recency, predefined source priority, event importance and coverage across domains. It makes no OpenAI requests. BUY / SELL / HOLD describes the rule-based interpretation of each headline and available excerpt; it is not a return forecast or a personalized investment recommendation.

**Current limitation:** new reports do not contain a combined whole-report BUY / SELL / HOLD assessment. Their report-level `assessment` is null; signals are calculated per story. The website can still display an assessment present in a previously stored purchase.

## Previous relevant news

The **PREVIOUS RELEVANT NEWS** section shows previously collected stories from the last seven days, excluding today according to UTC.

- Its coin filter initially follows the coin selected in step 2, and also supports **All coins**.
- Its importance filter is independent of the purchase filter.
- Rows show importance and the per-story signal, with access to the generated news card.
- All coins searches the collected archive; it does not guarantee complete coverage of every asset.

Today's news remains behind the paid report. Historical signals describe the original publication, not current market conditions.

## Email subscriptions

The compact **Subscribe** row includes coin scope, importance, email and the subscription button. Select a coin first, then subscribe to that coin or all coins. The alert importance filter is independent of the purchase and archive filters.

The user must confirm the subscription by email. The backend then checks subscribed assets approximately every **30 minutes**, subject to provider availability and quotas. Preference changes require a new confirmation.

Notifications contain coin names, importance icons and a link back to the website to buy the report. They reveal no news headlines, summaries or publisher links. Subscribing does not buy a report or initiate a wallet transaction. Each notification includes an unsubscribe link.

The backend runs the scheduled task and stores subscriptions in SQLite on its persistent disk. The frontend has no email database or SMTP credentials. See the backend README for configuration and coverage limits.

## Essential files

| File | Purpose |
|---|---|
| `index.html` | Page structure and controls |
| `style.css` | Blue design and responsive layout |
| `app.js` | Translations, filters, API requests, checkout and report rendering |
| `wallet.js` | Prebuilt Pera integration and transaction validation |
| `THIRD_PARTY_LICENSES.txt` | Notices for bundled dependencies |

Keep all five files at the repository root. `README.md` documents the project. Deployment needs no npm install, package manifest or JavaScript build: `wallet.js` is already bundled.

## Render Static Site

Connect this repository to a **Static Site**, separate from the existing Python backend Web Service.

| Setting | Value |
|---|---|
| Repository | `https://github.com/x402nidia-sudo/x402nidia-sudo-trading-news-web` |
| Branch | `main` |
| Root Directory | Empty |
| Build Command | `true` |
| Publish Directory | `.` |

`true` is a successful no-op command because the files are ready to serve. A Static Site does not need a Start Command or persistent disk.

The production API address in `app.js` is:

```js
const API = 'https://x402-trading-news.onrender.com';
```

Set these variables on the **backend**, not the Static Site:

| Variable | Value |
|---|---|
| `WEB_ORIGINS` | `https://trading-news-web.onrender.com` |
| `WEB_BASE_URL` | `https://trading-news-web.onrender.com` |
| `PRICE_USDC` | `0.2` |
| `ALERT_INTERVAL_HOURS` | `0.5` |

News provider keys and Gmail app credentials also belong exclusively in the backend. This plain static website does not automatically substitute Render environment variables into JavaScript.

The browser validates the API configuration and unsigned payment, including Algorand Mainnet, USDC asset `31566704`, the advertised amount and the pinned recipient. A recipient change requires coordinating both repositories and rebuilding wallet validation.

## Interrupted payments

The current UI has no **Recover report** or recovery-file download button. It retains the original signed payment request in browser storage and automatically checks its status when the page opens or becomes visible, and while a payment remains unresolved.

These status checks do not sign or settle a new payment. A confirmed stored purchase can be reopened; an expired transaction confirmed unpaid releases the purchase button. An unknown result remains pending to avoid a replacement charge. Preserve browser storage until the outcome is known, and keep signed payment proofs private.

## Local preview

```bash
python -m http.server 8080
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080/). The frontend still calls the production API; allow that exact origin in the backend's `WEB_ORIGINS` for local browser requests. Local hosting does not turn real payments into test payments.

## Troubleshooting

| Symptom | Check |
|---|---|
| Cannot connect to the service | Backend availability, API URL and exact `WEB_ORIGINS` setting |
| Buy button unavailable | Selected coin and importance, availability response, payment configuration and unresolved previous payment |
| No relevant news | No matching story for today's UTC date and chosen category; try another importance level |
| Source query fails | Backend provider credentials, quota and availability |
| Pera opens directly | Pera is the currently integrated wallet provider |
| Wallet payment fails | Algorand USDC balance, opt-in, account restrictions and the displayed error |
| Subscription controls unavailable | Backend 5.7, `email_alerts_enabled: true` and `alert_importance_enabled: true` |
| No alert email | Email confirmation, matching new stories, importance filter, spam folder and backend provider/SMTP status |
| Old layout or price | Confirm both deployments are current and reload the page to refresh assets and configuration |

Live payment success depends on the wallet, backend and facilitator. API documentation or a healthy deployment alone does not establish successful settlement.

References: [Render Static Sites](https://render.com/docs/static-sites), [Pera Connect](https://docs.perawallet.app/references/pera-connect/).
