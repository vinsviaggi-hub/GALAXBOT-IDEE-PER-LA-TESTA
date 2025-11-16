// app/demos/parrucchiera/page.tsx

export default function ParrucchieraDemo() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #e879f9 0, #1e1b4b 45%, #020617 100%)",
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
            Demo saloni parrucchiera · GalaxBot AI
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "8px",
              letterSpacing: 0.4,
            }}
          >
            GalaxBot AI × Salone Parrucchiera 💇‍♀️
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
            Esempio di come GalaxBot AI può aiutare un salone donna: gestisce
            prenotazioni, listino servizi, trattamenti e messaggi delle clienti
            in automatico, 24 ore su 24.
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
                "linear-gradient(135deg, #1e1b4b, rgba(15,23,42,0.8))",
              border: "1px solid rgba(244,244,245,0.9)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📅 Prenotazioni piega, colore, taglio
            </div>
            <div style={{ opacity: 0.9 }}>
              Raccoglie prenotazioni con nome, servizio, giorno, orario e
              telefono. Ti arriva tutto già pronto da confermare.
            </div>
          </div>

          {/* Box 2 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #1e1b4b, rgba(15,23,42,0.8))",
              border: "1px solid rgba(244,244,245,0.9)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              💜 Trattamenti, listino e servizi
            </div>
            <div style={{ opacity: 0.9 }}>
              Spiega listino prezzi, durata dei servizi (colore, balayage,
              trattamenti, ricostruzione, ecc.) e regole del salone sempre
              nello stesso modo.
            </div>
          </div>

          {/* Box 3 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #1e1b4b, rgba(15,23,42,0.8))",
              border: "1px solid rgba(244,244,245,0.9)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📲 WhatsApp, Instagram e sito
            </div>
            <div style={{ opacity: 0.9 }}>
              Le clienti scrivono su WhatsApp o in DM: il bot risponde subito,
              manda info e raccoglie le richieste anche quando il salone è
              chiuso.
            </div>
          </div>
        </section>

        {/* BLOCCO DESCRITTIVO */}
        <section
          style={{
            borderRadius: 22,
            padding: "18px 20px 18px",
            background:
              "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(15,23,42,0.86))",
            border: "1px solid rgba(244,244,245,0.95)",
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
            Cosa potrebbe fare nel tuo salone parrucchiera?
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
              Gestire prenotazioni per piega, colore, taglio, trattamenti e
              pacchetti.
            </li>
            <li>
              Rispondere alle domande su prezzi, durata dei servizi, prodotti
              usati e orari di apertura.
            </li>
            <li>
              Comunicare promo su colore, trattamenti, extension e servizi
              stagionali (matrimoni, eventi, feste).
            </li>
            <li>
              Ridurre le chiamate mentre sei con le clienti in poltrona, senza
              perdere messaggi.
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
            collegato ai tuoi canali (WhatsApp, Instagram o sito) e adattato al
            tuo listino, ai tuoi orari e al tuo stile di comunicazione.
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