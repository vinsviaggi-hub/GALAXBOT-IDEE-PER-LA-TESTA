// app/demos/hotel/page.tsx

export default function HotelDemo() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #facc15 0, #0f172a 45%, #020617 100%)",
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
            Demo hotel & B&B · GalaxBot AI
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "8px",
              letterSpacing: 0.4,
            }}
          >
            GalaxBot AI × Hotel 🏨
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
            Esempio di come GalaxBot AI può aiutare hotel, B&amp;B e strutture
            ricettive: risponde alle richieste, filtra i contatti e riduce le
            mail infinite.
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
                "linear-gradient(135deg, #0f172a, rgba(15,23,42,0.8))",
              border: "1px solid rgba(250,204,21,0.95)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              🛏️ Richieste camere e preventivi
            </div>
            <div style={{ opacity: 0.9 }}>
              Raccoglie richieste con date, numero ospiti, tipo di camera e
              bisogni particolari, lasciando a te l&apos;offerta finale.
            </div>
          </div>

          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #0f172a, rgba(15,23,42,0.8))",
              border: "1px solid rgba(250,204,21,0.95)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              ℹ️ Info check-in, servizi e parcheggio
            </div>
            <div style={{ opacity: 0.9 }}>
              Orari di check-in/out, colazione, parcheggio, tasse di soggiorno,
              politiche di cancellazione: sempre spiegate uguali.
            </div>
          </div>

          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #0f172a, rgba(15,23,42,0.8))",
              border: "1px solid rgba(250,204,21,0.95)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              🌐 Sito, WhatsApp, OTA
            </div>
            <div style={{ opacity: 0.9 }}>
              Risponde dal sito, da WhatsApp Business o da link dedicati nelle
              mail di conferma, 24 ore su 24.
            </div>
          </div>
        </section>

        <section
          style={{
            borderRadius: 22,
            padding: "18px 20px 18px",
            background:
              "linear-gradient(145deg, rgba(15,23,42,0.97), rgba(15,23,42,0.9))",
            border: "1px solid rgba(250,204,21,0.95)",
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
            Cosa potrebbe fare nel tuo hotel o B&amp;B?
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
              Filtrare richieste di soggiorno e farti arrivare solo contatti
              “caldi”.
            </li>
            <li>
              Ridurre le stesse domande su parcheggio, tasse, orari e servizi.
            </li>
            <li>
              Inviare info pre-arrivo (come arrivare, orari, regole della
              struttura).
            </li>
            <li>
              Essere sempre attivo anche quando reception e telefono sono
              chiusi.
            </li>
          </ul>

          <p
            style={{
              fontSize: "0.82rem",
              opacity: 0.75,
              marginTop: 12,
            }}
          >
            Questo è un esempio statico. Nel progetto reale il bot segue le
            regole del tuo hotel e si integra con i canali che usi già.
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