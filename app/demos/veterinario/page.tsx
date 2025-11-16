// app/demos/veterinario/page.tsx

export default function VeterinarioDemo() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #22c55e 0, #0f172a 45%, #020617 100%)",
        color: "#ffffff",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        padding: "32px 16px 40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 960 }}>
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
            Demo veterinari · GalaxBot AI
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "8px",
              letterSpacing: 0.4,
            }}
          >
            GalaxBot AI × Ambulatorio Veterinario 🐶🐱
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
            Esempio di come GalaxBot AI può aiutare un ambulatorio veterinario:
            gestisce richieste di visite, informazioni pratiche e messaggi dei
            clienti, mentre tu pensi agli animali.
          </p>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #0f172a, rgba(15,23,42,0.75))",
              border: "1px solid rgba(74,222,128,0.9)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📅 Visite e appuntamenti
            </div>
            <div style={{ opacity: 0.9 }}>
              Raccoglie richieste di visita, dati del pet, motivo della visita e
              orari preferiti, così tu devi solo confermare.
            </div>
          </div>

          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #0f172a, rgba(15,23,42,0.75))",
              border: "1px solid rgba(74,222,128,0.9)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              ℹ️ Info pratiche e urgenze
            </div>
            <div style={{ opacity: 0.9 }}>
              Orari, indirizzo, parcheggio, cosa fare in caso di urgenza, richiami
              vaccinali, esami di controllo: sempre uguale per tutti.
            </div>
          </div>

          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #0f172a, rgba(15,23,42,0.75))",
              border: "1px solid rgba(74,222,128,0.9)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📲 WhatsApp, sito o social
            </div>
            <div style={{ opacity: 0.9 }}>
              I clienti scrivono dove vogliono: WhatsApp, modulo sul sito,
              Instagram. Il bot risponde subito, 24/7.
            </div>
          </div>
        </section>

        <section
          style={{
            borderRadius: 22,
            padding: "18px 20px 18px",
            background:
              "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(15,23,42,0.85))",
            border: "1px solid rgba(74,222,128,0.95)",
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
            Cosa potrebbe fare nel tuo ambulatorio veterinario?
          </h2>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.1rem",
              lineHeight: 1.7,
              fontSize: "0.95rem",
            }}
          >
            <li>Gestire richieste di visite, vaccinazioni e controlli.</li>
            <li>
              Ricordare orari, indirizzo, dove parcheggiare e come preparare il
              pet alla visita.
            </li>
            <li>
              Filtrare domande semplici (orari, costi base, info generali) dalle
              vere urgenze.
            </li>
            <li>
              Inviare promemoria per richiami e controlli periodici, riducendo i
              mancati appuntamenti.
            </li>
          </ul>

          <p
            style={{
              fontSize: "0.82rem",
              opacity: 0.75,
              marginTop: 12,
            }}
          >
            Il bot non sostituisce mai il veterinario: gestisce solo la parte
            organizzativa e informativa, seguendo le regole del tuo studio.
          </p>
        </section>

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