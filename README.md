# GalaxBot – Idee per la Testa 💈

Questo progetto è un sito Next.js per il barber shop **“Idee per la Testa”**.  
Il sito mostra:

- info del negozio (indirizzo, telefono, servizi)
- chat con assistente virtuale (GalaxBot AI)
- modulo di **prenotazione veloce** collegato a Google Sheets
- modulo di **annullamento prenotazione**

Il backend è gestito con le API `app/api/chat` (OpenAI) e `app/api/bookings` (Google Apps Script).

---

## 🔧 Requisiti

- Node.js (versione consigliata 18+)
- npm (o yarn/pnpm/bun)
- Account OpenAI con API key valida
- Google Sheet + Apps Script già configurati per le prenotazioni

---

## ▶️ Avvio in locale

Da terminale, dentro la cartella del progetto:

```bash
npm install
npm run dev