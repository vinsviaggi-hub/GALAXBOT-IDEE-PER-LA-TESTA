// app/demos/bar/page.tsx

export default function BarDemo() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px 16px 40px",
        display: "flex",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top, #ff7a3c 0, #151c3b 45%, #050816 100%)",
        color: "#ffffff",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 960 }}>
        {/* BADGE IN ALTO */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "0.78rem",
            letterSpacing: 1.4,
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: 999,
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.22)",
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            Demo settore bar · GalaxBot AI
          </span>
        </div>

        {/* TITOLO + SOTTOTITOLO */}
        <header style={{ textAlign: "center", marginBottom: "26px" }}>
          <h1
            style={{
              fontSize: "2.1rem",
              marginBottom: "6px",
              letterSpacing: 0.4,
            }}
          >
            GalaxBot AI × Bar / Cocktail Bar 🍹
          </h1>
          <p
            style={{
              opacity: 0.9,
              lineHeight: 1.6,
              maxWidth: 640,
              margin: "0 auto",
              fontSize: "0.95rem",
            }}
          >
            Esempio di come GalaxBot AI può lavorare per un bar: risponde ai
            clienti, gestisce prenotazioni, tavoli, aperitivi, eventi e
            informazioni su orari in automatico, 24 ore su 24. Tu pensi solo al
            locale.
          </p>
        </header>

        {/* 3 CARDS SERVIZI */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
            marginBottom: "18px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(145deg, rgba(79,209,255,0.16), rgba(4,9,30,0.9))",
              border: "1px solid rgba(120,214,255,0.6)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.55)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              🍸 Ordini & prenotazioni
            </div>
            <div style={{ opacity: 0.95 }}>
              Il bot prende prenotazioni per tavoli, aperitivi, compleanni e
              serate speciali, senza chiamate perse.
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(145deg, rgba(255,126,190,0.18), rgba(4,9,30,0.9))",
              border: "1px solid rgba(255,163,214,0.65)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.55)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              🕒 Info rapide ai clienti
            </div>
            <div style={{ opacity: 0.95 }}>
              Orari, happy hour, eventi, musica live, dress code, listino
              drink: tutto spiegato in pochi secondi dal bot.
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(145deg, rgba(120,255,181,0.16), rgba(4,9,30,0.9))",
              border: "1px solid rgba(145,255,200,0.65)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.55)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📲 WhatsApp, Instagram o sito
            </div>
            <div style={{ opacity: 0.95 }}>
              Il bot risponde ai clienti dove scrivono davvero: WhatsApp
              Business, Instagram DM o direttamente dal tuo sito.
            </div>
          </div>
        </section>

        {/* BLOCCO TESTO LUNGO */}
        <section
          style={{
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              borderRadius: 22,
              padding: "18px 20px",
              background:
                "linear-gradient(145deg, rgba(7,16,43,0.95), rgba(3,7,22,0.98))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 18px 45px rgba(0,0,0,0.65)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 6 }}>
              Cosa potrebbe fare nella tua attività?
            </div>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li>
                Gestire prenotazioni tavoli per aperitivi, compleanni, feste
                aziendali e serate a tema.
              </li>
              <li>Rispondere a domande su orari, chiusure straordinarie e festivi.</li>
              <li>
                Dare informazioni su menù drink, snack, formule aperitivo e
                eventuale cucina.
              </li>
              <li>
                Inviare automaticamente posizione, parcheggio, regole
                d&apos;ingresso e consumazione minima.
              </li>
              <li>
                Comunicare eventi speciali: serate DJ, karaoke, partite in TV,
                serate a tema, ecc.
              </li>
            </ul>
            <p
              style={{
                marginTop: "10px",
                opacity: 0.85,
                fontSize: "0.86rem",
              }}
            >
              Questo è un esempio statico. Nel progetto reale il chatbot viene
              collegato ai tuoi orari, alle tue regole, al tuo menù o – se vuoi
              – al gestionale o a un foglio ordini.
            </p>
          </div>
        </section>

        {/* CTA FINALE */}
        <section
          style={{
            textAlign: "center",
            marginBottom: "10px",
            marginTop: "4px",
          }}
        >
          <p
            style={{
              fontSize: "0.86rem",
              opacity: 0.8,
              marginBottom: "12px",
            }}
          >
            Vuoi vedere una chat che risponde davvero da sola? Guarda il demo
            completo per barbieri (stesso motore, adattato al tuo settore)
            oppure scrivimi su Instagram.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/demos/barbiere"
              style={{
                padding: "11px 22px",
                borderRadius: 9999,
                background:
                  "radial-gradient(circle at top, #27b3ff 0, #007bff 40%, #0052cc 100%)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 12px 32px rgba(0,123,255,0.7)",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              💬 Guarda il demo con chat
            </a>

            <a
              href="https://www.instagram.com/galaxbot_ai?igsh=MW9zNmNlcmtuMHE3cA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "11px 22px",
                borderRadius: 9999,
                border: "1px solid rgba(255,255,255,0.55)",
                background: "rgba(0,0,0,0.35)",
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                backdropFilter: "blur(6px)",
              }}
            >
              ✉️ Scrivimi su Instagram
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}