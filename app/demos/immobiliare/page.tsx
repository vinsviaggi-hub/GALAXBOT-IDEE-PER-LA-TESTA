// app/demos/immobiliare/page.tsx

export default function ImmobiliareDemo() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #38bdf8 0, #0b1120 45%, #020617 100%)",
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
            Demo agenzie immobiliari · GalaxBot AI
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "8px",
              letterSpacing: 0.4,
            }}
          >
            GalaxBot AI × Immobiliare 🏠
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
            Esempio di come GalaxBot AI può aiutare un&apos;agenzia immobiliare:
            filtra i contatti, risponde alle domande base su annunci e gestisce
            richieste 24/7, così tu ti concentri solo sui clienti davvero
            interessati.
          </p>
        </header>

        {/* TRE BOX SERVIZI */}
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
                "linear-gradient(135deg, #020617, rgba(15,23,42,0.85))",
              border: "1px solid rgba(125,211,252,0.9)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              🧲 Filtra richieste e lead
            </div>
            <div style={{ opacity: 0.9 }}>
              Raccoglie richieste di acquisto o affitto con budget, zona,
              metratura, tipologia e tempi, così ti arrivano contatti già
              profilati.
            </div>
          </div>

          {/* Box 2 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #020617, rgba(15,23,42,0.85))",
              border: "1px solid rgba(125,211,252,0.9)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              🏘️ Info su annunci e visite
            </div>
            <div style={{ opacity: 0.9 }}>
              Risponde su caratteristiche generali (zona, piano, spese,
              riscaldamento, posto auto, ecc.) e può raccogliere richieste di
              appuntamento per visite.
            </div>
          </div>

          {/* Box 3 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #020617, rgba(15,23,42,0.85))",
              border: "1px solid rgba(125,211,252,0.9)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📲 Sito, WhatsApp e social
            </div>
            <div style={{ opacity: 0.9 }}>
              Lavora da chat sul sito, WhatsApp Business o social: risponde
              subito alle domande base e prende i contatti interessati agli
              immobili.
            </div>
          </div>
        </section>

        {/* BLOCCO DESCRITTIVO */}
        <section
          style={{
            borderRadius: 22,
            padding: "18px 20px 18px",
            background:
              "linear-gradient(145deg, rgba(15,23,42,0.97), rgba(15,23,42,0.9))",
            border: "1px solid rgba(125,211,252,0.95)",
            boxShadow: "0 18px 50px rgba(15,23,42,0.98)",
            marginBottom: 24,
          }}
        >
          <h2
            style={{
              fontSize: "1.1rem",
              marginBottom: 10,
            }}
          >
            Cosa potrebbe fare per la tua agenzia immobiliare?
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
              Filtrare in automatico chi cerca casa, negozio o ufficio in base
              a budget, zona e tempi.
            </li>
            <li>
              Rispondere alle domande ripetitive su annunci, spese, zona, posto
              auto, distanza dai servizi.
            </li>
            <li>
              Raccogliere richieste di appuntamento per visite in loco,
              lasciandoti nome, numero e immobile di interesse.
            </li>
            <li>
              Gestire anche i proprietari che vogliono valutare la vendita o
              mettere in affitto un immobile.
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
            collegato ai tuoi canali (sito, WhatsApp, social) e adattato ai
            tuoi annunci, alle tue zone e al tuo modo di lavorare con clienti e
            proprietari.
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