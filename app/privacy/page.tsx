// app/privacy/page.tsx

export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #020617 0, #020617 55%, #000000 100%)",
        color: "#e5e7eb",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        padding: "32px 16px 48px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 900 }}>
        <h1
          style={{
            fontSize: "1.8rem",
            marginBottom: 8,
          }}
        >
          Informativa privacy GalaxBot AI
        </h1>
        <p
          style={{
            fontSize: "0.9rem",
            opacity: 0.85,
            marginBottom: 18,
          }}
        >
          Ultimo aggiornamento: {new Date().getFullYear()}
        </p>

        <div
          style={{
            borderRadius: 20,
            padding: "18px 20px",
            background: "rgba(15,23,42,0.95)",
            border: "1px solid rgba(55,65,81,0.9)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
          }}
        >
          <p>
            La presente informativa descrive le modalità di trattamento dei
            dati personali raccolti tramite il sito GalaxBot AI e i servizi
            connessi, nel rispetto del Regolamento (UE) 2016/679
            (&quot;GDPR&quot;).
          </p>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>1. Titolare del trattamento</h2>
          <p>
            Il titolare del trattamento è GalaxBot AI (dati completi del
            titolare/azienda da inserire), contattabile all&apos;indirizzo
            email: <strong>galaxbotai@gmail.com</strong>.
          </p>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>2. Tipologie di dati raccolti</h2>
          <p>
            Tramite il sito e i moduli online possono essere raccolti i
            seguenti dati:
          </p>
          <ul style={{ paddingLeft: "1.1rem" }}>
            <li>
              Dati identificativi e di contatto del Cliente (nome, cognome,
              email, telefono, nome attività).
            </li>
            <li>
              Informazioni sull&apos;attività del Cliente (settore, servizi,
              orari, indirizzo).
            </li>
            <li>
              Dati tecnici di navigazione in forma aggregata (indirizzo IP
              anonimizzato, log tecnici, ecc.).
            </li>
          </ul>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>3. Finalità del trattamento</h2>
          <p>I dati sono trattati per le seguenti finalità:</p>
          <ul style={{ paddingLeft: "1.1rem" }}>
            <li>
              erogazione del Servizio GalaxBot AI e configurazione dei chatbot
              personalizzati;
            </li>
            <li>
              gestione amministrativa e contabile degli abbonamenti (tramite
              Stripe);
            </li>
            <li>
              risposta a richieste di informazioni da parte dei potenziali
              Clienti;
            </li>
            <li>
              adempimento di obblighi di legge e richieste dell&apos;autorità.
            </li>
          </ul>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>4. Base giuridica</h2>
          <p>
            La base giuridica principale del trattamento è l&apos;esecuzione
            del contratto di servizio sottoscritto dal Cliente e
            l&apos;adempimento di obblighi legali connessi.
          </p>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>5. Conservazione dei dati</h2>
          <p>
            I dati vengono conservati per il tempo necessario all&apos;erogazione
            del Servizio e, successivamente, per il periodo richiesto dalla
            normativa fiscale e civilistica applicabile.
          </p>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>6. Destinatari dei dati</h2>
          <p>
            I dati potranno essere comunicati a fornitori esterni che supportano
            l&apos;erogazione del Servizio (es. piattaforme di hosting, servizi
            di pagamento come Stripe), nominati all&apos;occorrenza
            responsabili del trattamento.
          </p>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>
            7. Diritti dell&apos;interessato
          </h2>
          <p>
            In qualsiasi momento l&apos;interessato può esercitare i diritti
            previsti dagli artt. 15–22 GDPR (accesso, rettifica, cancellazione,
            limitazione, opposizione, portabilità) scrivendo a{" "}
            <strong>galaxbotai@gmail.com</strong>.
          </p>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>8. Sicurezza</h2>
          <p>
            Il Titolare adotta misure tecniche e organizzative adeguate a
            proteggere i dati personali trattati, in linea con le best practice
            del settore.
          </p>
        </div>
      </div>
    </main>
  );
}