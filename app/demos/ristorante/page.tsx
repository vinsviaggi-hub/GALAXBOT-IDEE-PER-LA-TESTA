// app/demos/ristorante/page.tsx

export default function RistoranteDemo() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #fb923c 0, #0f172a 45%, #020617 100%)",
        color: "#ffffff",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        padding: "32px 16px 40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 960 }}>
        {/* HEADER */}
        <header style={{ textAlign: "center", marginBottom: 24 }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: 9999,
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.14)",
              fontSize: "0.78rem",
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Demo settore ristoranti · GalaxBot AI
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "8px",
              letterSpacing: 0.4,
            }}
          >
            GalaxBot AI × Ristorante 🍽️
          </h1>

          <p
            style={{
              opacity: 0.95,
              lineHeight: 1.6,
              maxWidth: 720,
              margin: "0 auto",
              fontSize: "1rem",
            }}
          >
            Esempio di come GalaxBot AI può lavorare per un ristorante:
            gestisce prenotazioni, domande su menu, intolleranze e orari in
            automatico, 24 ore su 24. Tu pensi solo al servizio in sala e in
            cucina.
          </p>
        </header>

        {/* TRE BOX */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
            marginBottom: 24,
          }}
        >
          {/* Box 1 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #0f172a, rgba(15,23,42,0.75))",
              border: "1px solid rgba(248,250,252,0.8)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📅 Prenotazioni tavoli
            </div>
            <div style={{ opacity: 0.9 }}>
              Raccoglie prenotazioni con data, orario, numero di persone, nome
              e telefono, così tu devi solo confermare dal gestionale o da
              WhatsApp.
            </div>
          </div>

          {/* Box 2 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #0f172a, rgba(15,23,42,0.75))",
              border: "1px solid rgba(248,250,252,0.8)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              🍝 Menu, allergeni e info
            </div>
            <div style={{ opacity: 0.9 }}>
              Risponde su piatti, menù fisso, allergeni, opzioni senza glutine /
              senza lattosio / vegane, fasce di prezzo, orari di cucina e
              servizi (asporto, delivery, ecc.).
            </div>
          </div>

          {/* Box 3 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #0f172a, rgba(15,23,42,0.75))",
              border: "1px solid rgba(248,250,252,0.8)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📲 WhatsApp, Instagram o sito
            </div>
            <div style={{ opacity: 0.9 }}>
              Il cliente ti scrive su WhatsApp, DM Instagram o dal sito: il bot
              risponde subito, prende i dati e ti lascia le richieste ordinate.
            </div>
          </div>
        </section>

        {/* BLOCCO TESTO PRINCIPALE */}
        <section
          style={{
            borderRadius: 22,
            padding: "18px 20px 18px",
            background:
              "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(15,23,42,0.85))",
            border: "1px solid rgba(248,250,252,0.9)",
            boxShadow: "0 18px 50px rgba(15,23,42,0.95)",
            marginBottom: 24,
          }}
        >
          <h2
            style={{
              fontSize: "1.1rem",
              marginBottom: 10,
            }}
          >
            Cosa potrebbe fare nella tua trattoria o ristorante?
          </h2>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.1rem",
              lineHeight: 1.7,
              fontSize: "0.95rem",
            }}
          >
            <li>
              Gestire prenotazioni tavoli con tutte le informazioni che ti
              servono subito.
            </li>
            <li>
              Rispondere alle stesse domande che arrivano ogni giorno: orari,
              menu, allergeni, parcheggio, menù fisso, eventi.
            </li>
            <li>
              Comunicare promo, menù degustazione, serate a tema, cenoni ed
              eventi speciali.
            </li>
            <li>
              Ridurre le telefonate durante il servizio, senza perdere nessuna
              richiesta dei clienti.
            </li>
          </ul>

          <p
            style={{
              fontSize: "0.82rem",
              opacity: 0.75,
              marginTop: 12,
            }}
          >
            Questo è un esempio statico. Nel progetto reale il chatbot viene
            collegato ai tuoi canali (WhatsApp, Instagram, sito) e personalizzato
            sul tuo menù, le tue regole e il tuo stile di comunicazione.
          </p>
        </section>

        {/* CTA FINALE */}
        <section style={{ textAlign: "center", marginTop: 10 }}>
          <p
            style={{
              fontSize: "0.9rem",
              opacity: 0.9,
              marginBottom: 14,
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
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/demos/barbiere"
              style={{
                borderRadius: 9999,
                padding: "11px 22px",
                background:
                  "linear-gradient(135deg, #22c55e, #16a34a)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 12px 30px rgba(34,197,94,0.5)",
              }}
            >
              Guarda il demo con chat
            </a>

            <a
              href="https://www.instagram.com/galaxbot_ai?igsh=MW9zNmNlcmtuMHE3cA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: 9999,
                padding: "11px 22px",
                border: "1px solid rgba(255,255,255,0.7)",
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                background: "rgba(15,23,42,0.7)",
                backdropFilter: "blur(8px)",
              }}
            >
              Scrivimi su Instagram
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}