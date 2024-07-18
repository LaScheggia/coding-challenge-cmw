# Coding Challenge
Sviluppare la funzionalità descritta dell’esercizio iniziale in Nuxt. 
L’output sarà una tabella html, grafica come da mockup, con questi valori: numero posizione, nome criptovaluta, simbolo, prezzo, circulating supply e ultimo aggiornamento, con h1 e p in SSR e tabella in SPA.

## Setup
Install the dependencies:
```bash
npm install
```

## Configuring environment
Create a `.env` file and add the following :
```bash
NUXT_COIN_MARKET_CAP_BASE_URL= https://pro-api.coinmarketcap.com
NUXT_COIN_MARKET_CAP_API_KEY= *insert your apiKey*
```

## Development Server
Start the development server on `http://localhost:3000`:
```bash
npm run dev
```

# DOMANDE 
## Spiegare come organizzare il progetto in Nuxt, che funzionalità utilizzare e per quale motivo.
R: Bisogna seguire una directory ben precisa quando si usa Nuxt o altri framework.
La cartella `/pages` (anche se prettamente optional per le landing pages a singola pagina) permette di creare al suo interno le pagine che avranno già il loro routing. Non serve nessun import. La cartella `/components` permette anch'essa di creare numerosi componenti riutilizzabili in tutto il progetto senza bisogno di import. Grazie alla cartella `server/api` possiamo creare file nei queli possiamo salvare e creare le nostre api da poi consumare con `$fetch` o `useFetch`. In `/layouts` si possono creare framework per generalizzare i layout UI delle pagine. 


## Viene chiesto di caricare il progetto su un hosting serverless (Vercel o Netlify), che funzionalità di Nuxt usiamo e che accorgimenti dobbiamo prendere per fare in modo che il progetto funzioni correttamente anche questa modalità?
R: Leggendo la [documentazione](https://nuxt.com/deploy/netlify) non c'è configurazione da effettuare anche se il link redirect in cui si dovrebbero avere maggior informazioni in data odierna non funziona (https://nitro.unjs.io/deploy#zero-config-providers)


## Spiegare che bisogna fare in Nuxt per rendere la pagina visibile ai robots (Google). Che accorgimenti dobbiamo fare in Nuxt? Perchè?
R: Per rendere la pagina visibile ai robot utilizzare [Nuxt SEO](https://nuxtseo.com/): una raccolta di vari moduli nuxt. Alcuni esempi sono: Robots, Sitemap e LinkChecker. Tramite la configurazione di questi moduli avremo un sito indicizzato, con parole chiave, con url precisi e pronto per essere scansionato dai robot di Google. Per qualcosa di meno complesso di Nuxt SEO: https://nuxt.com/docs/getting-started/seo-meta

## Viene chiesto di avvertire l’utente, colorando il prezzo di rosso, ogni volta che il valore di Bitcoin cambia dall’ultima volta che ha visitato la pagina. Che funzionalità di Vue.js possiamo usare? Perchè?
R: Posso utilizzare i watcher (`ref`  `watch`) di Vue.js per monitorare i cambiamenti del prezzo del Bitcoin nello store. Quando il prezzo cambia, il watcher può aggiornare la classe CSS per cambiarne il colore del prezzo a rosso.

## Viene chiesto di far visualizzare questa pagina solo agli utenti che si collegano dall’Italia. Che funzionalità si può utilizzare di Nuxt per farlo? Come la faresti?
R: Nuxt permette attraverso la cartella `Middleware/` di creare file in cui poter configurare o meno accessi e permessi. In un caso di limitazione di un certo paese penserei a bloccare tutti gli indirizzi IP non italiani o utilizzando un qualche plugin di geo-localizzaione.

## Viene chiesto di mettere in cache solo la tabella (non tutta la pagina) per 5 minuti, come possiamo fare?
R: Per mettere in cache la tabella ci sono varie soluzioni a livello di componente potremmo utilizzare soluzioni come `localStorage` o `sessionStorage` per memorizzare i dati temporanei.