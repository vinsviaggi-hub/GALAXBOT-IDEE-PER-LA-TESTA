// app/termini/page.tsx

export default function TerminiPage() {
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
          Termini d&apos;uso GalaxBot AI
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
            Questi Termini d&apos;uso regolano l&apos;utilizzo del servizio
            GalaxBot AI (&quot;Servizio&quot;) fornito da GalaxBot AI
            (&quot;Fornitore&quot;). Utilizzando il Servizio, l&apos;utente
            (&quot;Cliente&quot;) accetta integralmente i presenti termini.
          </p>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>1. Oggetto del servizio</h2>
          <p>
            GalaxBot AI fornisce chatbot personalizzati per attività commerciali
            (es. barbieri, ristoranti, studi professionali, negozi) per
            gestire messaggi, richieste di informazioni e prenotazioni
            attraverso canali digitali selezionati (es. WhatsApp Business,
            Instagram, sito web del Cliente).
          </p>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>2. Modalità di abbonamento</h2>
          <p>
            Il Servizio è erogato in abbonamento mensile tramite pagamento
            ricorrente su Stripe. Il costo e le eventuali promozioni
            applicabili sono indicati nella pagina di attivazione e nel
            checkout Stripe.
          </p>
          <p>
            Il Cliente può disdire l&apos;abbonamento in qualsiasi momento
            tramite il portale clienti Stripe messo a disposizione dopo
            l&apos;attivazione. La disdetta ha effetto al termine del periodo di
            fatturazione in corso; non sono previsti rimborsi per periodi
            già pagati.
          </p>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>
            3. Responsabilità del Cliente
          </h2>
          <ul style={{ paddingLeft: "1.1rem" }}>
            <li>
              Fornire informazioni corrette e aggiornate su attività, servizi,
              orari e regole del proprio locale.
            </li>
            <li>
              Verificare le prenotazioni e le richieste ricevute tramite il
              bot, decidendo in autonomia se confermarle o meno.
            </li>
            <li>
              Utilizzare il Servizio nel rispetto delle normative vigenti,
              inclusa la normativa sulla privacy e sulla comunicazione
              commerciale.
            </li>
          </ul>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>
            4. Limitazione di responsabilità
          </h2>
          <p>
            GalaxBot AI si impegna a mantenere il Servizio funzionante e
            aggiornato, ma non garantisce l&apos;assenza di interruzioni,
            errori o malfunzionamenti. In nessun caso il Fornitore potrà essere
            ritenuto responsabile per:
          </p>
          <ul style={{ paddingLeft: "1.1rem" }}>
            <li>mancate prenotazioni o perdite di guadagno;</li>
            <li>errori dovuti a informazioni non aggiornate fornite dal Cliente;</li>
            <li>
              utilizzi impropri del Servizio o violazioni di legge da parte del
              Cliente.
            </li>
          </ul>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>5. Modifiche al servizio</h2>
          <p>
            Il Fornitore si riserva la facoltà di aggiornare, modificare o
            interrompere alcune funzionalità del Servizio, informando i Clienti
            in caso di cambiamenti rilevanti che impattino sul canone o sulle
            modalità di utilizzo.
          </p>

          <h2 style={{ fontSize: "1rem", marginTop: 16 }}>6. Foro competente</h2>
          <p>
            Per ogni controversia relativa all&apos;interpretazione o
            esecuzione dei presenti Termini sarà competente il foro del luogo
            di residenza o domicilio del Fornitore, salvo diversa previsione di
            legge a tutela del consumatore.
          </p>
        </div>
      </div>
    </main>
  );
}