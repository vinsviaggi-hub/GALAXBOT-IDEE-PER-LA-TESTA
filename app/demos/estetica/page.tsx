// app/demos/centro-estetico/page.tsx

export default function CentroEsteticoDemo() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #ec4899 0, #1e1b4b 45%, #020617 100%)",
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
            Demo centri estetici & beauty · GalaxBot AI
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "8px",
              letterSpacing: 0.4,
            }}
          >
            GalaxBot AI × Centro Estetico 💅
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
            Esempio di come GalaxBot AI può seguire i clienti di un centro
            estetico o beauty: appuntamenti, listino trattamenti, promo e
            domande frequenti, tutto automatico.
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
                "linear-gradient(135deg, #1e1b4b, rgba(15,23,42,0.7))",
              border: "1px solid rgba(244,114,182,0.9)",
              boxShadow: "0 16px 40px rgba(24,16,48,0.85)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📅 Appuntamenti & trattamenti
            </div>
            <div style={{ opacity: 0.9 }}>
              Prende richieste di appuntamento, propone gli orari liberi,
              specifica durata e prezzi dei trattamenti più richiesti.
            </div>
          </div>

          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #1e1b4b, rgba(15,23,42,0.7))",
              border: "1px solid rgba(244,114,182,0.9)",
              boxShadow: "0 16px 40px rgba(24,16,48,0.85)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              💳 Listino, pacchetti e promo
            </div>
            <div style={{ opacity: 0.9 }}>
              Spiega listino servizi, pacchetti abbonamento, promo del mese,
              condizioni di cancellazione e caparra se prevista.
            </div>
          </div>

          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #1e1b4b, rgba(15,23,42,0.7))",
              border: "1px solid rgba(244,114,182,0.9)",
              boxShadow: "0 16px 40px rgba(24,16,48,0.85)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📲 WhatsApp & Instagram
            </div>
            <div style={{ opacity: 0.9 }}>
              Le clienti scrivono in DM o su WhatsApp: il bot risponde subito,
              prende i dati e tu confermi quando sei libera.
            </div>
          </div>
        </section>

        <section
          style={{
            borderRadius: 22,
            padding: "18px 20px 18px",
            background:
              "linear-gradient(145deg, rgba(24,16,48,0.96), rgba(24,16,48,0.85))",
            border: "1px solid rgba(244,114,182,0.95)",
            boxShadow: "0 18px 50px rgba(24,16,48,0.95)",
            marginBottom: 24,
          }}
        >
          <h2
            style={{
              fontSize: "1.1rem",
              marginBottom: 10,
            }}
          >
            Cosa potrebbe fare nel tuo centro estetico o salone beauty?
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
              Gestire richieste per manicure, pedicure, trattamenti viso, corpo
              e laser.
            </li>
            <li>
              Inviare promemoria automatici il giorno prima dell&apos;appuntamento.
            </li>
            <li>
              Dare indicazioni pre e post trattamento (es. cosa evitare dopo il
              laser).
            </li>
            <li>
              Proporre pacchetti e abbonamenti alle clienti più attive.
            </li>
            <li>
              Liberarti da decine di messaggi su orari, prezzi e “hai posto
              domani?”.
            </li>
          </ul>

          <p
            style={{
              fontSize: "0.82rem",
              opacity: 0.75,
              marginTop: 12,
            }}
          >
            Questo è solo un esempio. Nel progetto reale il bot viene adattato
            al tuo centro estetico: trattamenti, regole, orari e stile di
            comunicazione su misura.
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
            completo per barbieri (stesso motore, adattato al tuo settore) oppure
            scrivimi su Instagram.
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