// app/demos/barbiere/page.tsx

import ChatBox from "../../components/chatbox";

export default function BarbiereDemo() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #c048ff 0, #1a0b2e 55%, #050816 100%)",
        color: "#ffffff",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        padding: "32px 16px 40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 960 }}>
        {/* BADGE + TITOLO */}
        <header style={{ textAlign: "center", marginBottom: "28px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: 9999,
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.14)",
              fontSize: "0.75rem",
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Demo per barbieri e parrucchieri · GalaxBot AI
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "8px",
              letterSpacing: 0.4,
            }}
          >
            GalaxBot AI × Barber Shop 💈✂️
          </h1>

          <p
            style={{
              opacity: 0.9,
              lineHeight: 1.6,
              maxWidth: 640,
              margin: "0 auto",
              fontSize: "0.98rem",
            }}
          >
            Questo è un esempio di come GalaxBot AI può lavorare per un barbiere
            o parrucchiere: risponde ai clienti, gestisce appuntamenti, listino
            servizi e messaggi 24/7.
            <br />
            <strong>
              L’abbonamento però vale per qualsiasi attività: bar, pizzeria,
              studio medico, negozio, centro estetico, ecc.
            </strong>
          </p>
        </header>

        {/* TRE CARDS SERVIZI */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
            marginBottom: "22px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 16,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(0,0,0,0.2))",
              boxShadow: "0 12px 35px rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.22)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📅 Prenotazioni automatiche
            </div>
            <div style={{ opacity: 0.9 }}>
              Il bot raccoglie richieste di appuntamento e conferma gli orari in
              automatico, così tu pensi solo a tagliare.
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 16,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(0,0,0,0.2))",
              boxShadow: "0 12px 35px rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.22)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              💇 Info su tagli e trattamenti
            </div>
            <div style={{ opacity: 0.9 }}>
              Spiega listino prezzi, durata dei trattamenti, servizi extra e
              regole del salone sempre allo stesso modo, senza dimenticare
              nulla.
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 16,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(0,0,0,0.2))",
              boxShadow: "0 12px 35px rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.22)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📲 WhatsApp & Instagram
            </div>
            <div style={{ opacity: 0.9 }}>
              Risponde ai clienti dove scrivono davvero: WhatsApp Business,
              Instagram DM o sito web, anche quando il negozio è chiuso.
            </div>
          </div>
        </section>

        {/* AVVISO DEMO + CTA + MODULO + ABBONAMENTO */}
        <section
          style={{
            textAlign: "center",
            marginBottom: "26px",
          }}
        >
          <p
            style={{
              fontSize: "0.86rem",
              opacity: 0.8,
              marginBottom: "14px",
              maxWidth: 700,
              marginInline: "auto",
            }}
          >
            ⚠️{" "}
            <strong>Questo è un demo per barbieri/parrucchieri.</strong> Nel
            progetto reale colleghiamo il bot al tuo tipo di attività (bar,
            pizzeria, studio medico, negozio, centro estetico, ecc.), con nome
            del locale, servizi, prezzi, orari e regole su misura.
          </p>

          <p
            style={{
              fontSize: "0.9rem",
              opacity: 0.9,
              marginBottom: "10px",
            }}
          >
            👉{" "}
            <strong>
              Passo 1: compila il modulo con i dati del tuo negozio
            </strong>
            . <br />
            👉{" "}
            <strong>
              Passo 2: attiva l&apos;abbonamento con la PROMO10 (10€ il primo
              mese, poi 29€/mese).
            </strong>
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "10px",
            }}
          >
            {/* BOTTONE MODULO GOOGLE – CAMBIA L’URL CON IL TUO LINK */}
            <a
              href="https://forms.gle/IL_TUO_MODULO_GOOGLE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: 9999,
                padding: "11px 22px",
                background: "#22c55e",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              }}
            >
              Compila il modulo per la tua attività
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/galaxbot_ai?igsh=MW9zNmNlcmtuMHE3cA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: 9999,
                padding: "11px 22px",
                border: "1px solid rgba(255,255,255,0.6)",
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                backdropFilter: "blur(6px)",
                background: "rgba(0,0,0,0.25)",
              }}
            >
              Scrivimi su Instagram
            </a>

            {/* STRIPE ABBONAMENTO */}
            <a
              href="https://buy.stripe.com/5kQ4gzbY30Vi6sP6uab3q02"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: 9999,
                padding: "11px 22px",
                background: "#ffdd00",
                color: "#000000",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                display: "inline-block",
              }}
            >
              Attiva il tuo abbonamento (10€ il primo mese)
            </a>
          </div>

          <p
            style={{
              fontSize: "0.8rem",
              opacity: 0.9,
              marginTop: "4px",
            }}
          >
            💡 Nel checkout inserisci il codice{" "}
            <span
              style={{
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              PROMO10
            </span>{" "}
            per pagare solo <strong>10€ il primo mese</strong>, poi{" "}
            <strong>29€/mese</strong>. Dopo il pagamento ti contatto e configuro
            il bot sulla tua attività.
          </p>
        </section>

        {/* TITOLO CHAT */}
        <section style={{ textAlign: "center", marginBottom: "10px" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              marginBottom: "4px",
            }}
          >
            Prova il chatbot in tempo reale 💬
          </h2>
          <p
            style={{
              fontSize: "0.85rem",
              opacity: 0.8,
            }}
          >
            Esempi di domande:{" "}
            <span style={{ opacity: 0.9 }}>
              “Posso prenotare un taglio domani?”, “Avete posto sabato
              pomeriggio?”, “Quanto costa taglio + barba?”, “Fate trattamenti
              per capelli ricci?”.
            </span>
          </p>
        </section>

        {/* BOX CHAT CON CORNICE */}
        <section
          style={{
            marginTop: "10px",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              padding: "2px",
              borderRadius: 28,
              background:
                "linear-gradient(135deg, rgba(255,80,80,0.9), rgba(80,160,255,0.9))",
            }}
          >
            <div
              style={{
                borderRadius: 24,
                background:
                  "radial-gradient(circle at top, #12142b 0, #050816 60%)",
                padding: "18px 18px 20px",
              }}
            >
              <ChatBox />
            </div>
          </div>
        </section>

        {/* NOTA FINALE */}
        <p
          style={{
            fontSize: "0.78rem",
            opacity: 0.7,
            textAlign: "center",
            marginTop: "8px",
          }}
        >
          Questo è solo un esempio. Nel progetto reale colleghiamo GalaxBot AI
          al tuo WhatsApp Business, Instagram o sito web e lo adattiamo al tuo
          settore (barbiere, pizzeria, bar, studio medico, negozio, ecc.),
          gestendo per te messaggi, appuntamenti e prenotazioni.
        </p>
      </div>
    </main>
  );
}