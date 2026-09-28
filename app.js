"use strict";
const TEXT = {"en":{"api":"API for agents ↗","connect":"Connect wallet","disconnect":"Disconnect","title":"NEWS INTELLIGENCE","intro":"Today's news for each asset, ranked by relevance. With sources, dates and an explanation of the selection.","one":"ONE REPORT · ONE ASSET","once":"One payment. No subscription.","checking":"Checking availability…","asset":"ASSET","buy":"Buy report","pending":"A purchase is pending. Recover the same report before making another payment.","resume":"Recover report","savePending":"Save recovery file","report":"ASSET REPORT","received":"Received","unique":"Relevant and unique","duplicates":"Duplicates grouped","sources":"Available providers","selected":"01 / SELECTED NEWS","why":"Why this story","criteria":"Scores combine asset relevance (35), recency (25), predefined source priority (15), event (15) and coverage (10). Ties use the newest publication, then URL. Source weights are not fact checks.","providerStatus":"Source availability","ranked":"News ranked by relevance","today":"Today · UTC","editorial":"Priority scores measure news relevance, not expected returns or a BUY/SELL/HOLD recommendation.","originalLanguage":"Headlines and excerpts keep the source's original language. Interface and selection explanations follow your chosen language.","partial":"Partial coverage: one or more providers could not be queried.","export":"Download report (JSON) ↓","noExtra":"Save your purchased report at no additional charge.","start":"Choose an asset to begin","startText":"Select a coin to see recent news and check today’s report before paying.","noNews":"If no relevant news is available today (UTC), payment is not settled.","choose":"Choose your asset","catalog":"Bitcoin, Ethereum, Algorand and 46 other assets.","authorize":"Authorize the payment","paymentText":"Pay {price} USDC on Algorand through x402.","context":"Receive context","contextText":"The selected story, alternatives and original sources.","footer":"Trading News · News ranked by relevance.","confirmTitle":"Confirm your report","reportLabel":"Report","networkFee":"Your network fee","network":"Network","ledger":"Using a hardware wallet? Unlock it and open the Algorand app. Your account must have USDC opted in.","authorizeWallet":"Authorize in my wallet","creating":"Creating report…","preflight":"Checking today’s news…","signing":"Approve in your wallet…","confirming":"Confirming payment and preparing report…","waiting":"Keep this page open.","ready":"Algorand Mainnet · x402","disabled":"Purchases are not enabled","sponsored":"0 ALGO · sponsored","recipient":"Recipient","paid":"Payment confirmed","replayed":"Recovered without another payment","receipt":"View receipt ↗","generated":"Report generated","rules":"EXPLAINABLE RULES","ai":"AI + RULES","read":"Read original source ↗","score":"priority / 100","rMatch":"Asset relevance","rAge":"Age (hours)","rEvent":"Event","rCoverage":"Domains with similar headlines","rIndependence":"Coverage does not prove independent verification.","speculative":"Speculative headline: reduced priority.","aiEvidence":"Evidence used by the selector","available":"Available","notConfigured":"Not configured","unavailable":"Unavailable","networkError":"Could not connect to the service. Try again; if a purchase is pending, recover that same report.","sourcesError":"The sources are unavailable. Please try again.","walletError":"The wallet did not complete the request. Check the connection, USDC balance and opt-in, then try again.","paymentError":"The payment is not confirmed. Keep the recovery file and recover the same report; do not create another payment.","configError":"The service configuration could not be verified. Purchases are unavailable.","storageError":"Enable browser storage before making a purchase so an interrupted payment can be recovered.","expired":"The quote expired. Prepare the purchase again before signing.","security":"Security","regulation":"Regulation","protocol":"Protocol","adoption":"Adoption","macro":"Macroeconomics","market":"Market","walletWarning":"Payment requires USDC on {network}, not USDC from another network.","signalLabel":"WHOLE REPORT ASSESSMENT","signalCoverage":"News items evaluated","signalScope":"Based on every headline and excerpt in this report; full articles, prices and charts were not analyzed.","impactPOSITIVE":"Positive evidence","impactNEGATIVE":"Negative evidence","impactMIXED":"Mixed evidence","impactNEUTRAL":"Neutral evidence","rulesReport":"NEWS RANKED BY RULES","rulesScope":"The highest-scoring story appears first. This report contains ranked news, sources and selection explanations.","rFreshness":"Recency","rSource":"Source priority","rTotal":"Total priority","languageLabel":"Language","selectAsset":"Select your coin","assetPlaceholder":"Choose a coin…","checkingNews":"Checking relevant news…","newsAvailable":"Relevant news is available today. You can buy the complete report.","noTodayNews":"No relevant news is available today.","newsNetworkError":"The news check failed. Please try again.","retryNews":"Check again","latestLabel":"LATEST RELEVANT NEWS","latestScope":"Relevant headlines found in the last 7 days, ranked by relevance. The paid report covers today’s news (UTC).","latestEmpty":"No relevant news was found in the last 7 days.","lastChecked":"Last checked","alertLabel":"Email me about new relevant news for {symbol}","alertButton":"Notify me","alertNote":"Confirm your email to receive free alerts for {symbol}. Checked every {minutes} minutes, subject to source availability and quotas. Unsubscribe at any time. No purchase is made.","alertSent":"Check your inbox and confirm the subscription. If you already subscribed, your alerts remain active.","alertSending":"Sending confirmation…","emailUnavailable":"Email alerts are temporarily unavailable. Please try again later.","emailNotConfigured":"Email alerts are not available yet.","invalidEmail":"Enter a valid email address and select a coin.","emailLimit":"Too many requests. Please try again later."},"es":{"api":"API para agentes ↗","connect":"Conectar wallet","disconnect":"Desconectar","title":"INTELIGENCIA DE NOTICIAS","intro":"Las noticias del día de cada activo, ordenadas por relevancia. Con fuentes, fechas y una explicación de la selección.","one":"UN REPORTE · UN ACTIVO","once":"Pago único. Sin suscripción.","checking":"Comprobando disponibilidad…","asset":"ACTIVO","buy":"Comprar reporte","pending":"Hay una compra pendiente. Recupera el mismo reporte antes de realizar otro pago.","resume":"Recuperar reporte","savePending":"Guardar recuperación","report":"REPORTE DEL ACTIVO","received":"Recibidos","unique":"Relevantes y únicos","duplicates":"Duplicados agrupados","sources":"Proveedores disponibles","selected":"01 / NOTICIA SELECCIONADA","why":"Por qué esta noticia","criteria":"La puntuación combina relevancia del activo (35), actualidad (25), prioridad predefinida de la fuente (15), evento (15) y cobertura (10). Los empates se resuelven por fecha más reciente y después por URL. La prioridad de la fuente no verifica los hechos.","providerStatus":"Estado de las fuentes","ranked":"Noticias ordenadas por relevancia","today":"Hoy · UTC","editorial":"La puntuación mide la relevancia de las noticias, no la rentabilidad esperada ni una recomendación BUY/SELL/HOLD.","originalLanguage":"Los titulares y fragmentos conservan el idioma original de la fuente. La interfaz y las explicaciones de selección usan el idioma elegido.","partial":"Cobertura parcial: no se pudo consultar algún proveedor.","export":"Descargar reporte (JSON) ↓","noExtra":"Guarda tu reporte comprado sin otro cobro.","start":"Elige un activo para empezar","startText":"Selecciona una moneda para ver las últimas noticias y comprobar el informe de hoy antes de pagar.","noNews":"Si no hay noticias relevantes de hoy (UTC), no se liquida el pago.","choose":"Elige tu activo","catalog":"Bitcoin, Ethereum, Algorand y otros 46 activos.","authorize":"Autoriza el pago","paymentText":"Paga {price} USDC en Algorand mediante x402.","context":"Recibe contexto","contextText":"La noticia principal, las alternativas y las fuentes originales.","footer":"Trading News · Noticias ordenadas por relevancia.","confirmTitle":"Confirmar reporte","reportLabel":"Reporte","networkFee":"Comisión de red a tu cargo","network":"Red","ledger":"¿Usas una hardware wallet? Desbloquéala y abre la app de Algorand. Tu cuenta debe tener USDC activado (opt-in).","authorizeWallet":"Autorizar en mi wallet","creating":"Creando reporte…","preflight":"Comprobando las noticias de hoy…","signing":"Aprueba en tu wallet…","confirming":"Confirmando pago y preparando reporte…","waiting":"Mantén esta página abierta.","ready":"Algorand Mainnet · x402","disabled":"Compras no habilitadas","sponsored":"0 ALGO · patrocinada","recipient":"Destinatario","paid":"Pago confirmado","replayed":"Recuperado sin otro cobro","receipt":"Ver recibo ↗","generated":"Reporte creado","rules":"REGLAS EXPLICABLES","ai":"IA + REGLAS","read":"Leer fuente original ↗","score":"prioridad / 100","rMatch":"Relevancia del activo","rAge":"Antigüedad (horas)","rEvent":"Evento","rCoverage":"Dominios con titulares similares","rIndependence":"La cobertura no demuestra verificación independiente.","speculative":"Titular especulativo: prioridad reducida.","aiEvidence":"Fragmento usado por el selector","available":"Disponible","notConfigured":"Sin configurar","unavailable":"No disponible","networkError":"No se pudo conectar con el servicio. Reintenta; si hay una compra pendiente, recupera ese mismo reporte.","sourcesError":"Las fuentes no están disponibles. Vuelve a intentarlo.","walletError":"La wallet no completó la solicitud. Comprueba la conexión, el saldo USDC y el opt-in, y reintenta.","paymentError":"El pago no está confirmado. Conserva la recuperación y recupera el mismo reporte; no crees otro pago.","configError":"No se pudo verificar la configuración del servicio. Las compras no están disponibles.","storageError":"Activa el almacenamiento del navegador para poder recuperar un pago interrumpido.","expired":"La solicitud ha caducado. Prepara la compra de nuevo antes de firmar.","security":"Seguridad","regulation":"Regulación","protocol":"Protocolo","adoption":"Adopción","macro":"Macroeconomía","market":"Mercado","walletWarning":"Para pagar se necesita USDC de {network}, no USDC de otra red.","signalLabel":"EVALUACIÓN DEL REPORTE COMPLETO","signalCoverage":"Noticias evaluadas","signalScope":"Basada en todos los titulares y fragmentos de este reporte; no se han analizado artículos completos, precios ni gráficos.","impactPOSITIVE":"Evidencia positiva","impactNEGATIVE":"Evidencia negativa","impactMIXED":"Evidencia mixta","impactNEUTRAL":"Evidencia neutral","rulesReport":"NOTICIAS ORDENADAS MEDIANTE REGLAS","rulesScope":"La noticia con mayor puntuación aparece primero. El reporte incluye noticias ordenadas, fuentes y una explicación de la selección.","rFreshness":"Actualidad","rSource":"Prioridad de la fuente","rTotal":"Prioridad total","languageLabel":"Idioma","selectAsset":"Selecciona la moneda","assetPlaceholder":"Elige una moneda…","checkingNews":"Consultando noticias relevantes…","newsAvailable":"Hay noticias relevantes de hoy. Puedes comprar el informe completo.","noTodayNews":"No hay noticias relevantes disponibles hoy.","newsNetworkError":"La consulta de noticias ha fallado. Vuelve a intentarlo.","retryNews":"Volver a consultar","latestLabel":"ÚLTIMAS NOTICIAS RELEVANTES","latestScope":"Titulares relevantes encontrados en los últimos 7 días, ordenados por relevancia. El informe de pago incluye las noticias de hoy (UTC).","latestEmpty":"No se encontraron noticias relevantes en los últimos 7 días.","lastChecked":"Última consulta","alertLabel":"Avísame por email de nuevas noticias relevantes de {symbol}","alertButton":"Avísame","alertNote":"Confirma tu email para recibir avisos gratuitos de {symbol}. Revisión cada {minutes} minutos, según disponibilidad y cuotas de las fuentes. Puedes darte de baja en cualquier momento. No se realiza ninguna compra.","alertSent":"Revisa tu correo y confirma la suscripción. Si ya estabas suscrito, tus avisos siguen activos.","alertSending":"Enviando confirmación…","emailUnavailable":"Los avisos por email no están disponibles temporalmente. Inténtalo más tarde.","emailNotConfigured":"Los avisos por email todavía no están disponibles.","invalidEmail":"Introduce un email válido y selecciona una moneda.","emailLimit":"Demasiadas solicitudes. Inténtalo más tarde."},"fr":{"api":"API pour agents ↗","connect":"Connecter le portefeuille","disconnect":"Déconnecter","title":"INTELLIGENCE DE L’ACTUALITÉ","intro":"Les actualités du jour de chaque actif, classées par pertinence. Avec sources, dates et explication de la sélection.","one":"UN RAPPORT · UN ACTIF","once":"Paiement unique. Sans abonnement.","checking":"Vérification de la disponibilité…","asset":"ACTIF","buy":"Acheter le rapport","pending":"Un achat est en attente. Récupérez le même rapport avant d’effectuer un autre paiement.","resume":"Récupérer le rapport","savePending":"Enregistrer la récupération","report":"RAPPORT DE L’ACTIF","received":"Reçus","unique":"Pertinents et uniques","duplicates":"Doublons regroupés","sources":"Fournisseurs disponibles","selected":"01 / ACTUALITÉ SÉLECTIONNÉE","why":"Pourquoi cet article","criteria":"Le score combine pertinence de l’actif (35), récence (25), priorité prédéfinie de la source (15), événement (15) et couverture (10). En cas d’égalité, la date la plus récente puis l’URL départagent les articles. Le poids des sources ne vérifie pas les faits.","providerStatus":"Disponibilité des sources","ranked":"Actualités classées par pertinence","today":"Aujourd’hui · UTC","editorial":"Le score mesure la pertinence des actualités, pas un rendement attendu ni une recommandation BUY/SELL/HOLD.","originalLanguage":"Les titres et extraits restent dans la langue originale. L’interface et les explications suivent la langue choisie.","partial":"Couverture partielle : certains fournisseurs n’ont pas pu être consultés.","export":"Télécharger le rapport (JSON) ↓","noExtra":"Enregistrez votre rapport acheté sans frais supplémentaires.","start":"Choisissez un actif pour commencer","startText":"Sélectionnez un actif pour voir les dernières actualités et vérifier le rapport du jour avant de payer.","noNews":"En l’absence d’actualité pertinente aujourd’hui (UTC), aucun paiement n’est encaissé.","choose":"Choisissez votre actif","catalog":"Bitcoin, Ethereum, Algorand et 46 autres actifs.","authorize":"Autorisez le paiement","paymentText":"Payez {price} USDC sur Algorand via x402.","context":"Recevez du contexte","contextText":"L’article sélectionné, les alternatives et les sources originales.","footer":"Trading News · Actualités classées par pertinence.","confirmTitle":"Confirmer le rapport","reportLabel":"Rapport","networkFee":"Vos frais de réseau","network":"Réseau","ledger":"Portefeuille matériel ? Déverrouillez-le et ouvrez l’application Algorand. Votre compte doit avoir activé USDC (opt-in).","authorizeWallet":"Autoriser dans mon portefeuille","creating":"Création du rapport…","preflight":"Vérification des actualités du jour…","signing":"Confirmez dans votre portefeuille…","confirming":"Confirmation du paiement et préparation du rapport…","waiting":"Gardez cette page ouverte.","ready":"Algorand Mainnet · x402","disabled":"Achats non activés","sponsored":"0 ALGO · sponsorisé","recipient":"Destinataire","paid":"Paiement confirmé","replayed":"Récupéré sans nouveau paiement","receipt":"Voir le reçu ↗","generated":"Rapport créé","rules":"RÈGLES EXPLICABLES","ai":"IA + RÈGLES","read":"Lire la source originale ↗","score":"priorité / 100","rMatch":"Pertinence pour l’actif","rAge":"Ancienneté (heures)","rEvent":"Événement","rCoverage":"Domaines aux titres similaires","rIndependence":"La couverture ne prouve pas une vérification indépendante.","speculative":"Titre spéculatif : priorité réduite.","aiEvidence":"Extrait utilisé pour la sélection","available":"Disponible","notConfigured":"Non configuré","unavailable":"Indisponible","networkError":"Connexion au service impossible. Réessayez ; si un achat est en attente, récupérez ce même rapport.","sourcesError":"Les sources sont indisponibles. Veuillez réessayer.","walletError":"Le portefeuille n’a pas terminé la demande. Vérifiez la connexion, le solde USDC et l’opt-in, puis réessayez.","paymentError":"Paiement non confirmé. Conservez la récupération et récupérez le même rapport ; ne créez pas un nouveau paiement.","configError":"La configuration du service n’a pas pu être vérifiée. Achats indisponibles.","storageError":"Activez le stockage du navigateur pour récupérer un paiement interrompu.","expired":"La demande a expiré. Préparez de nouveau l’achat avant de signer.","security":"Sécurité","regulation":"Réglementation","protocol":"Protocole","adoption":"Adoption","macro":"Macroéconomie","market":"Marché","walletWarning":"Pour payer, il faut des USDC sur {network}, pas sur un autre réseau.","signalLabel":"ÉVALUATION DU RAPPORT COMPLET","signalCoverage":"Actualités évaluées","signalScope":"Basée sur tous les titres et extraits du rapport ; les articles complets, prix et graphiques ne sont pas analysés.","impactPOSITIVE":"Éléments positifs","impactNEGATIVE":"Éléments négatifs","impactMIXED":"Éléments contrastés","impactNEUTRAL":"Éléments neutres","rulesReport":"ACTUALITÉS CLASSÉES PAR RÈGLES","rulesScope":"L’article ayant le meilleur score apparaît en premier. Le rapport présente les actualités classées, leurs sources et les raisons de la sélection.","rFreshness":"Récence","rSource":"Priorité de la source","rTotal":"Priorité totale","languageLabel":"Langue","selectAsset":"Sélectionnez votre actif","assetPlaceholder":"Choisissez un actif…","checkingNews":"Recherche des actualités pertinentes…","newsAvailable":"Des actualités pertinentes sont disponibles aujourd’hui. Vous pouvez acheter le rapport complet.","noTodayNews":"Aucune actualité pertinente n’est disponible aujourd’hui.","newsNetworkError":"La recherche a échoué. Veuillez réessayer.","retryNews":"Vérifier à nouveau","latestLabel":"DERNIÈRES ACTUALITÉS PERTINENTES","latestScope":"Titres pertinents trouvés au cours des 7 derniers jours, classés par pertinence. Le rapport payant couvre les actualités du jour (UTC).","latestEmpty":"Aucune actualité pertinente trouvée au cours des 7 derniers jours.","lastChecked":"Dernière vérification","alertLabel":"Me prévenir par e-mail des nouvelles actualités de {symbol}","alertButton":"Me prévenir","alertNote":"Confirmez votre e-mail pour les alertes gratuites de {symbol}. Vérification toutes les {minutes} minutes, selon la disponibilité et les quotas des sources. Désabonnement possible à tout moment. Aucun achat effectué.","alertSent":"Consultez votre messagerie et confirmez l’abonnement. Si vous êtes déjà abonné, vos alertes restent actives.","alertSending":"Envoi de la confirmation…","emailUnavailable":"Les alertes e-mail sont temporairement indisponibles. Réessayez plus tard.","emailNotConfigured":"Les alertes e-mail ne sont pas encore disponibles.","invalidEmail":"Saisissez une adresse e-mail valide et sélectionnez un actif.","emailLimit":"Trop de demandes. Réessayez plus tard."},"de":{"api":"API für Agenten ↗","connect":"Wallet verbinden","disconnect":"Trennen","title":"NACHRICHTENANALYSE","intro":"Die heutigen Nachrichten zu jedem Asset, nach Relevanz geordnet. Mit Quellen, Datum und Begründung der Auswahl.","one":"EIN BERICHT · EIN ASSET","once":"Einmalige Zahlung. Kein Abonnement.","checking":"Verfügbarkeit wird geprüft…","asset":"ASSET","buy":"Bericht kaufen","pending":"Ein Kauf ist noch offen. Rufe denselben Bericht ab, bevor du erneut zahlst.","resume":"Bericht wiederherstellen","savePending":"Wiederherstellungsdatei speichern","report":"ASSET-BERICHT","received":"Empfangen","unique":"Relevant und eindeutig","duplicates":"Duplikate gruppiert","sources":"Verfügbare Anbieter","selected":"01 / AUSGEWÄHLTE NACHRICHT","why":"Warum diese Nachricht","criteria":"Die Punktzahl kombiniert Asset-Relevanz (35), Aktualität (25), vordefinierte Quellenpriorität (15), Ereignis (15) und Berichterstattung (10). Bei Gleichstand entscheiden das neueste Datum und dann die URL. Quellengewichte sind keine Faktenprüfung.","providerStatus":"Verfügbarkeit der Quellen","ranked":"Nachrichten nach Relevanz","today":"Heute · UTC","editorial":"Die Punktzahl misst die Nachrichtenrelevanz, keine erwartete Rendite und keine BUY/SELL/HOLD-Empfehlung.","originalLanguage":"Überschriften und Auszüge bleiben in der Originalsprache. Oberfläche und Auswahlbegründungen verwenden die gewählte Sprache.","partial":"Teilweise Abdeckung: Einige Anbieter konnten nicht abgefragt werden.","export":"Bericht herunterladen (JSON) ↓","noExtra":"Speichere deinen gekauften Bericht ohne weitere Kosten.","start":"Wähle ein Asset aus","startText":"Wählen Sie eine Kryptowährung, um aktuelle Nachrichten zu sehen und den heutigen Bericht vor dem Bezahlen zu prüfen.","noNews":"Gibt es heute (UTC) keine relevanten Nachrichten, wird keine Zahlung abgewickelt.","choose":"Wähle dein Asset","catalog":"Bitcoin, Ethereum, Algorand und 46 weitere Assets.","authorize":"Zahlung autorisieren","paymentText":"Zahle {price} USDC auf Algorand über x402.","context":"Erhalte Kontext","contextText":"Die ausgewählte Nachricht, Alternativen und Originalquellen.","footer":"Trading News · Nachrichten nach Relevanz.","confirmTitle":"Bericht bestätigen","reportLabel":"Bericht","networkFee":"Deine Netzwerkgebühr","network":"Netzwerk","ledger":"Hardware-Wallet? Entsperre sie und öffne die Algorand-App. USDC muss für dein Konto aktiviert sein (Opt-in).","authorizeWallet":"In meiner Wallet autorisieren","creating":"Bericht wird erstellt…","preflight":"Heutige Nachrichten werden geprüft…","signing":"In deiner Wallet bestätigen…","confirming":"Zahlung bestätigen und Bericht vorbereiten…","waiting":"Lass diese Seite geöffnet.","ready":"Algorand Mainnet · x402","disabled":"Käufe sind nicht aktiviert","sponsored":"0 ALGO · gesponsert","recipient":"Empfänger","paid":"Zahlung bestätigt","replayed":"Ohne weitere Zahlung wiederhergestellt","receipt":"Beleg ansehen ↗","generated":"Bericht erstellt","rules":"NACHVOLLZIEHBARE REGELN","ai":"KI + REGELN","read":"Originalquelle lesen ↗","score":"Priorität / 100","rMatch":"Asset-Relevanz","rAge":"Alter (Stunden)","rEvent":"Ereignis","rCoverage":"Domains mit ähnlichen Überschriften","rIndependence":"Berichterstattung beweist keine unabhängige Prüfung.","speculative":"Spekulative Überschrift: geringere Priorität.","aiEvidence":"Für die Auswahl verwendeter Auszug","available":"Verfügbar","notConfigured":"Nicht konfiguriert","unavailable":"Nicht verfügbar","networkError":"Verbindung zum Dienst fehlgeschlagen. Versuche es erneut; stelle bei einem offenen Kauf denselben Bericht wieder her.","sourcesError":"Die Quellen sind nicht verfügbar. Bitte versuchen Sie es erneut.","walletError":"Die Wallet hat die Anfrage nicht abgeschlossen. Prüfe Verbindung, USDC-Guthaben und Opt-in und versuche es erneut.","paymentError":"Zahlung nicht bestätigt. Bewahre die Wiederherstellungsdatei auf und rufe denselben Bericht ab; erstelle keine neue Zahlung.","configError":"Die Dienstkonfiguration konnte nicht geprüft werden. Käufe sind nicht verfügbar.","storageError":"Aktiviere den Browserspeicher, um eine unterbrochene Zahlung wiederherzustellen.","expired":"Die Anfrage ist abgelaufen. Bereite den Kauf vor der Unterschrift erneut vor.","security":"Sicherheit","regulation":"Regulierung","protocol":"Protokoll","adoption":"Akzeptanz","macro":"Makroökonomie","market":"Markt","walletWarning":"Zum Bezahlen brauchst du USDC auf {network}, keine USDC aus einem anderen Netzwerk.","signalLabel":"BEWERTUNG DES GESAMTEN BERICHTS","signalCoverage":"Bewertete Nachrichten","signalScope":"Basiert auf allen Überschriften und Auszügen dieses Berichts; vollständige Artikel, Kurse und Charts wurden nicht analysiert.","impactPOSITIVE":"Positive Hinweise","impactNEGATIVE":"Negative Hinweise","impactMIXED":"Gemischte Hinweise","impactNEUTRAL":"Neutrale Hinweise","rulesReport":"NACH REGELN GEORDNETE NACHRICHTEN","rulesScope":"Die Nachricht mit der höchsten Punktzahl steht zuerst. Der Bericht enthält geordnete Nachrichten, Quellen und Auswahlbegründungen.","rFreshness":"Aktualität","rSource":"Quellenpriorität","rTotal":"Gesamtpriorität","languageLabel":"Sprache","selectAsset":"Wählen Sie Ihre Kryptowährung","assetPlaceholder":"Kryptowährung auswählen…","checkingNews":"Relevante Nachrichten werden geprüft…","newsAvailable":"Heute sind relevante Nachrichten verfügbar. Sie können den vollständigen Bericht kaufen.","noTodayNews":"Heute sind keine relevanten Nachrichten verfügbar.","newsNetworkError":"Die Abfrage ist fehlgeschlagen. Bitte versuchen Sie es erneut.","retryNews":"Erneut prüfen","latestLabel":"NEUESTE RELEVANTE NACHRICHTEN","latestScope":"Relevante Schlagzeilen aus den letzten 7 Tagen, nach Relevanz sortiert. Der kostenpflichtige Bericht enthält die heutigen Nachrichten (UTC).","latestEmpty":"In den letzten 7 Tagen wurden keine relevanten Nachrichten gefunden.","lastChecked":"Zuletzt geprüft","alertLabel":"E-Mail-Benachrichtigungen zu neuen relevanten Nachrichten über {symbol}","alertButton":"Benachrichtigen","alertNote":"Bestätigen Sie Ihre E-Mail für kostenlose Benachrichtigungen zu {symbol}. Prüfung alle {minutes} Minuten, abhängig von Verfügbarkeit und Abfragelimits der Quellen. Jederzeit abmeldbar. Es erfolgt kein Kauf.","alertSent":"Prüfen Sie Ihr Postfach und bestätigen Sie das Abonnement. Falls Sie bereits abonniert sind, bleiben Ihre Benachrichtigungen aktiv.","alertSending":"Bestätigung wird gesendet…","emailUnavailable":"E-Mail-Benachrichtigungen sind vorübergehend nicht verfügbar. Bitte versuchen Sie es später erneut.","emailNotConfigured":"E-Mail-Benachrichtigungen sind noch nicht verfügbar.","invalidEmail":"Geben Sie eine gültige E-Mail-Adresse ein und wählen Sie eine Kryptowährung.","emailLimit":"Zu viele Anfragen. Bitte versuchen Sie es später erneut."}};
const API = 'https://x402-trading-news.onrender.com';
// Public receiving address returned by the existing registered BTC payment endpoint.
const PAY_TO = 'EH5BHWISPB7MEIITJIWF2VB3YFN2RZLJMWBRV6CBJV76FBAEAALL6XKSQE';
const MAINNET = 'algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=';
const PENDING_KEY = 'tradingnews.pending.v5';
const $ = id => document.getElementById(id);
let newsState = 'idle', newsData = null, newsError = '', newsSequence = 0, alertState = '', alertSending = false;
let lang = 'en', config, report, quote, walletAddress = '', walletModule, busyState = '', pending = null, activeError = '';
try { const saved=localStorage.getItem('tradingnews.language'); if(TEXT[saved])lang=saved; pending=JSON.parse(localStorage.getItem(PENDING_KEY)||'null'); } catch {}
const urlParams=new URLSearchParams(location.search);if(TEXT[urlParams.get('lang')])lang=urlParams.get('lang');
function t(key){return (TEXT[lang][key] || TEXT.en[key] || key).replace('{price}',price());}
function node(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function link(url,label){const a=node('a',label);try{const u=new URL(url);if(u.protocol==='https:'||u.protocol==='http:'){a.href=u.href;a.target='_blank';a.rel='noopener noreferrer';}}catch{}return a;}
function date(value){return new Date(value).toLocaleString(lang,{dateStyle:'medium',timeStyle:'short',timeZone:'UTC'})+' UTC';}
function atomicPrice(value){
 if(typeof value!=='string'||!/^\d+(\.\d{1,6})?$/.test(value))throw failure('configError');
 const [whole,fraction='']=value.split('.');const amount=BigInt(whole)*1000000n+BigInt(fraction.padEnd(6,'0'));
 if(amount<=0n||amount>9007199254740991n)throw failure('configError');return amount.toString();
}
function price(value=config?.price_usdc){
 if(!value)return '—';
 const [whole,fraction='']=value.split('.');
 const decimal=new Intl.NumberFormat(lang).formatToParts(1.1).find(p=>p.type==='decimal').value;
 return new Intl.NumberFormat(lang).format(BigInt(whole))+decimal+fraction.padEnd(3,'0');
}
function refresh(){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-t]').forEach(n=>n.textContent=t(n.dataset.t));
 const warning=t('walletWarning').split('{network}');$('wallet-warning').replaceChildren(document.createTextNode(warning[0]),node('strong','Algorand'),document.createTextNode(warning[1]));
 $('language').value=lang;$('language').setAttribute('aria-label',t('languageLabel'));
 $('price').textContent=price();$('buy-text').textContent=t('buy')+' · '+price()+' USDC';
 $('availability').textContent=t(!config?'checking':config.payments_enabled?'ready':'disabled');
 $('wallet-text').textContent=walletAddress?walletAddress.slice(0,6)+'…'+walletAddress.slice(-4):t('connect');
 $('progress-title').textContent=t(busyState||'creating');$('progress-note').textContent=t('waiting');
 if(activeError)$('error').textContent=t(activeError);
 renderNews();if(quote)renderQuote();if(report)renderReport();
}
function setBusy(key=''){
 busyState=key;$('progress').hidden=!key;
 $('buy').disabled=!!key||!!pending||!config?.payments_enabled||newsState!=='available';
 $('wallet').disabled=!!key||!config?.payments_enabled;
 $('asset').disabled=!!key||!!pending||!config;
 $('confirm').disabled=!!key;$('cancel').disabled=!!key;$('resume').disabled=!!key;
 document.querySelectorAll('[data-symbol]').forEach(n=>n.disabled=!!key||!!pending||!config);
 $('pending').hidden=!pending;refresh();
}
function error(key){activeError=key;$('error').textContent=t(key);$('error').hidden=false;}
function clearError(){activeError='';$('error').hidden=true;}
function clearReport(){report=null;$('report').hidden=true;$('empty').hidden=false;}
function failure(key){return Object.assign(new Error(key),{uiKey:key});}
async function request(path,options={}){
 const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),125000);
 try{
  const response=await fetch(API+path,{...options,signal:controller.signal,cache:'no-store'});
  let data;try{data=await response.json();}catch{throw failure('networkError');}
  if(!response.ok){const detail=typeof data.detail==='string'?data.detail:data.detail?.code;
   if(detail==='SOURCES_UNAVAILABLE')throw failure('sourcesError');
   if(detail==='NO_TODAY_NEWS')throw failure('noTodayNews');
   const mailErrors={EMAIL_NOT_CONFIGURED:'emailNotConfigured',EMAIL_UNAVAILABLE:'emailUnavailable',INVALID_EMAIL:'invalidEmail',EMAIL_LIMIT:'emailLimit'};
   if(mailErrors[detail])throw failure(mailErrors[detail]);
   if(detail==='PURCHASES_DISABLED')throw failure('disabled');
   throw failure(pending?'paymentError':'networkError');
  }
  return {response,data};
 }catch(e){if(e.uiKey)throw e;throw failure(pending?'paymentError':'networkError');}
 finally{clearTimeout(timeout);}
}
async function getWallet(){if(!walletModule)walletModule=await import('./wallet.js');return walletModule;}
async function connect(){walletAddress=await (await getWallet()).connect(config);refresh();return walletAddress;}
function renderQuote(){
 $('checkout-price').textContent=price(quote.price_usdc)+' USDC';
 $('checkout-asset').textContent=quote.symbol+' · '+$('asset').selectedOptions[0]?.textContent.split(' · ').slice(1).join(' · ');
 $('checkout-fee').textContent=quote.network_fee_sponsored?t('sponsored'):(quote.customer_network_fee_microalgo/1e6)+' ALGO';
 $('recipient').textContent=t('recipient')+': '+quote.challenge.accepts[0].payTo;
}
function validatePending(p){
 const u=new URL(p.url);
 if(u.origin!==API||!/^\/api\/v1\/market-signal\/[A-Z0-9]+$/.test(u.pathname)||u.search||u.hash||typeof p.signature!=='string'||p.signature.length>32768)throw failure('paymentError');
 return u.pathname;
}
async function resume(){
 const current=pending;if(!current)throw failure('paymentError');
 const {response,data}=await request(validatePending(current),{headers:{'PAYMENT-SIGNATURE':current.signature}});
 let receipt;try{receipt=JSON.parse(atob(response.headers.get('PAYMENT-RESPONSE')||''));}catch{throw failure('paymentError');}
 if(data.billing?.charged!==true||receipt.success!==true||receipt.network!==config.network_caip||
    receipt.transaction!==data.billing.receipt?.transaction||!data.best_article||!Array.isArray(data.articles)||
    data.symbol!==current.url.split('/').pop())throw failure('paymentError');
 setBusy('creating');
 // Render the purchased result after settlement has been confirmed, with a visible status update.
 await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
 report=data;renderReport();pending=null;localStorage.removeItem(PENDING_KEY);$('pending').hidden=true;
 $('report').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
}
function renderReport(){
 const assessment=report.assessment;
 const valid=assessment&&['BUY','SELL','HOLD'].includes(assessment.signal);
 $('signal-panel').hidden=!valid;$('rules-panel').hidden=!!valid;
 if(valid){
  $('signal-symbol').textContent=report.symbol;
  $('signal-value').textContent=assessment.signal;
  $('signal-rationale').textContent=assessment.rationale?.[lang]||assessment.rationale?.en||'';
  $('signal-count').textContent=t('signalCoverage')+': '+assessment.evaluated_count+' / '+report.articles.length;
 }

 $('report').hidden=false;$('empty').hidden=true;$('report-title').textContent=report.name+' / '+report.symbol;
 $('updated').textContent=t('generated')+': '+date(report.generated_at);
 $('receipt').replaceChildren(node('span',t(report.billing.replayed?'replayed':'paid')+' · '),link('https://explorer.perawallet.app/tx/'+report.billing.receipt.transaction,t('receipt')));
 for(const key of ['received','unique','duplicates'])$(key).textContent=report.stats?.[key]??'—';
 $('sources').textContent=report.providers.filter(p=>p.status==='ok').length;
 $('method').textContent=t(report.selection_method==='semantic_and_rules'?'ai':'rules');
 const a=report.best_article;
 $('best').replaceChildren(node('h3',a.title),node('p',a.summary),node('div',a.source+' · '+date(a.published_at),'source'),link(a.url,t('read')));
 const reasons=[
  `${t('rMatch')}: ${a.components.relevance}/35`,
  `${t('rFreshness')}: ${a.components.freshness}/25 · ${t('rAge')}: ${a.age_hours}`,
  `${t('rSource')}: ${a.components.source_priority}/15`,
  `${t('rEvent')}: ${t(a.category)} · ${a.components.event}/15`,
  `${t('rCoverage')}: ${a.coverage_domains} · ${a.components.coverage}/10. ${t('rIndependence')}`,
  `${t('rTotal')}: ${a.score}/100`
 ];
 if(a.speculative)reasons.push(t('speculative'));
 if(report.ai?.evidence_quote)reasons.push(t('aiEvidence')+': “'+report.ai.evidence_quote+'”');
 $('reasons').replaceChildren(...reasons.map(v=>node('li',v)));
 $('provider-status').replaceChildren(...report.providers.map(p=>{const r=node('div',undefined,'provider');r.append(node('span',p.provider),node('span',t(p.status==='ok'?'available':p.status==='not_configured'?'notConfigured':'unavailable')+' · '+(p.count||0)));return r;}));
 $('partial').hidden=!report.providers.some(p=>!['ok','not_configured'].includes(p.status));
 $('articles').replaceChildren(...report.articles.map((a,i)=>{
  const row=node('article',undefined,'article-row'),body=node('div'),heading=node('h4');heading.append(link(a.url,a.title));
  body.append(heading,node('p',a.source+' · '+date(a.published_at)+' · '+t(a.category)));
  if(a.summary)body.append(node('p',a.summary));
  const evaluation=report.assessment?.evaluations?.find(e=>e.article_id===a.id);
  if(evaluation)body.append(node('p',t('impact'+evaluation.impact)+': “'+evaluation.evidence_quote+'”','impact-evidence'));
  if(a.coverage?.length>1){const coverage=node('div',undefined,'coverage-links');a.coverage.forEach(s=>coverage.append(link(s.url,s.source),node('span',' ')));body.append(coverage);}
  const score=node('div',new Intl.NumberFormat(lang,{maximumFractionDigits:1}).format(a.score),'article-score');score.append(node('small',t('score')));
  row.append(node('div',String(i+1).padStart(2,'0'),'article-num'),body,score);return row;
 }));
}
function download(data,name){const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const a=node('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function storedPending(){try{return JSON.parse(localStorage.getItem(PENDING_KEY)||'null');}catch{throw failure('storageError');}}
$('buy').addEventListener('click',async()=>{
 if(busyState||pending||newsState!=='available'||!$('asset').value)return;clearError();clearReport();setBusy('preflight');
 try{
  pending=storedPending();if(pending)throw failure('paymentError');
  try{localStorage.setItem('tradingnews.storagecheck','1');localStorage.removeItem('tradingnews.storagecheck');}catch{throw failure('storageError');}
  if(!walletAddress)await connect();
  const symbol=$('asset').value;
  const {data}=await request('/api/v1/checkout/'+encodeURIComponent(symbol),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({address:walletAddress})});
  if(atomicPrice(data.price_usdc)!==config.price_atomic)throw failure('configError');
  quote={...data,symbol};renderQuote();$('checkout').showModal();
 }catch(e){if(e.uiKey==='noTodayNews'){newsState='empty';newsData=null;}else if(e.uiKey==='sourcesError'){newsState='error';newsError='sourcesError';newsData=null;}error(e.uiKey||'walletError');}finally{setBusy();}
});
$('confirm').addEventListener('click',async()=>{
 if(busyState||!quote)return;
 const doPurchase=async lock=>{
  if(!lock){error('pending');return;}
  clearError();setBusy('signing');$('checkout').close();
  try{
   pending=storedPending();if(pending)throw failure('paymentError');
   if(quote.expires_at*1000<=Date.now())throw failure('expired');
   const signature=await (await getWallet()).sign(quote);
   const saved={url:quote.challenge.resource.url,signature,amount_usdc:quote.price_usdc,created_at:new Date().toISOString()};
   try{localStorage.setItem(PENDING_KEY,JSON.stringify(saved));}catch{throw failure('storageError');}
   pending=saved;setBusy('confirming');await resume();
  }catch(e){error(e.uiKey||(pending?'paymentError':'walletError'));}finally{quote=null;setBusy();}
 };
 if(navigator.locks)await navigator.locks.request('tradingnews-purchase',{ifAvailable:true},doPurchase);else await doPurchase(true);
});
$('cancel').addEventListener('click',()=>{$('checkout').close();quote=null;});
$('resume').addEventListener('click',async()=>{if(busyState)return;clearError();setBusy('confirming');try{await resume();}catch(e){error(e.uiKey||'paymentError');}finally{setBusy();}});
$('save-pending').addEventListener('click',()=>{if(pending)download(pending,'tradingnews-recovery.json');});
$('download').addEventListener('click',()=>{if(report)download(report,'tradingnews-'+report.symbol+'.json');});
$('wallet').addEventListener('click',async()=>{if(busyState)return;if(walletAddress){$('wallet-menu').hidden=!$('wallet-menu').hidden;return;}clearError();setBusy('signing');try{await connect();}catch{error('walletError');}finally{setBusy();}});
$('disconnect').addEventListener('click',async()=>{try{await (await getWallet()).disconnect();}finally{walletAddress='';$('wallet-menu').hidden=true;refresh();}});
window.addEventListener('wallet-disconnected',()=>{walletAddress='';refresh();});
window.addEventListener('storage',e=>{if(e.key===PENDING_KEY){pending=storedPending();if(!busyState)setBusy();}});
$('language').addEventListener('change',()=>{lang=$('language').value;try{localStorage.setItem('tradingnews.language',lang);}catch{}refresh();});
function assetText(key){return t(key).replaceAll('{symbol}',$('asset').value).replaceAll('{minutes}',String(config?.alert_interval_minutes||30));}
function renderNews(){
 const selected=!!$('asset').value;
 $('buy').hidden=!selected;$('news-status').hidden=!selected;$('latest').hidden=!selected;
 $('empty').hidden=selected||!!report;
 const message={loading:'checkingNews',available:'newsAvailable',empty:'noTodayNews',error:newsError||'newsNetworkError'}[newsState];
 $('news-status-text').textContent=message?t(message):'';
 $('news-status').classList.toggle('query-error',newsState==='error');
 $('news-partial').hidden=!newsData?.partial_sources;
 $('news-retry').hidden=!['empty','error'].includes(newsState);$('news-retry').disabled=!!busyState;
 $('alert-form').hidden=newsState!=='empty';
 $('alert-label').textContent=assetText('alertLabel');
 $('alert-note').textContent=assetText(config?.email_alerts_enabled?'alertNote':'emailNotConfigured');
 $('alert-submit').textContent=t(alertSending?'alertSending':'alertButton');
 $('alert-submit').disabled=alertSending||!selected||!config?.email_alerts_enabled;
 $('alert-email').disabled=alertSending||!config?.email_alerts_enabled;
 $('alert-result').hidden=!alertState;$('alert-result').textContent=alertState?t(alertState):'';
 $('latest-title').textContent=newsData?newsData.name+' / '+newsData.symbol:$('asset').selectedOptions[0]?.textContent||'';
 $('latest-checked').textContent=newsData?t('lastChecked')+': '+date(newsData.checked_at):'';
 $('latest-articles').replaceChildren(...(newsData?.articles||[]).map((a,i)=>{
  const row=node('article',undefined,'article-row preview-row'),body=node('div'),heading=node('h3');heading.append(link(a.url,a.title));
  body.append(heading,node('p',a.source+' · '+date(a.published_at)));row.append(node('span',String(i+1).padStart(2,'0'),'article-num'),body);return row;
 }));
 $('latest-empty').hidden=!!newsData?.articles?.length;
 $('latest-empty').textContent=t(newsState==='loading'?'checkingNews':newsState==='error'?(newsError||'newsNetworkError'):'latestEmpty');
}
async function selectAsset(symbol){
 const sequence=++newsSequence;
 $('asset').value=symbol;clearReport();clearError();newsData=null;newsError='';alertState='';
 newsState=symbol?'loading':'idle';setBusy(busyState);
 if(!symbol)return;
 try{
  const {data}=await request('/api/v1/news/'+encodeURIComponent(symbol));
  if(sequence!==newsSequence)return;
  if(data.symbol!==symbol||!Array.isArray(data.articles)||!['available','no_today_news'].includes(data.status))throw failure('newsNetworkError');
  newsData=data;newsState=data.has_today_news===true?'available':'empty';
 }catch(e){if(sequence!==newsSequence)return;newsState='error';newsError=e.uiKey==='sourcesError'?'sourcesError':'newsNetworkError';}
 if(sequence===newsSequence)setBusy(busyState);
}
$('asset').addEventListener('change',()=>selectAsset($('asset').value));
$('news-retry').addEventListener('click',()=>{if(!busyState)selectAsset($('asset').value);});
$('alert-form').addEventListener('submit',async e=>{
 e.preventDefault();const symbol=$('asset').value;
 if(alertSending)return;
 if(!symbol||newsState!=='empty'||!$('alert-email').checkValidity()){alertState='invalidEmail';renderNews();return;}
 if(!config?.email_alerts_enabled){alertState='emailNotConfigured';renderNews();return;}
 alertSending=true;alertState='';renderNews();
 try{
  await request('/api/v1/alerts/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:$('alert-email').value.trim(),symbol,language:lang})});
  if($('asset').value===symbol)alertState='alertSent';
 }catch(e){if($('asset').value===symbol)alertState=['invalidEmail','emailNotConfigured','emailLimit'].includes(e.uiKey)?e.uiKey:'emailUnavailable';}
 finally{alertSending=false;renderNews();}
});
refresh();
(async()=>{
 try{
  const [{data:c},{data:a}]=await Promise.all([request('/api/v1/config'),request('/api/v1/assets')]);
  if(c.api_url!==API||atomicPrice(c.price_usdc)!==c.price_atomic||c.network_caip!==MAINNET||c.asset_id!=='31566704'||c.pay_to!==PAY_TO)throw failure('configError');
  config=c;
  a.assets.forEach(a=>{const o=node('option',a.symbol+' · '+a.name);o.value=a.symbol;$('asset').append(o);});
  const initial=pending?.url?.split('/').pop()||urlParams.get('asset');
  selectAsset(a.assets.some(a=>a.symbol===initial)?initial:'');getWallet().catch(()=>{});setBusy();
 }catch(e){error(e.uiKey||'configError');$('availability').textContent=t('unavailable');}
})();
