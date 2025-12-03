// lib/waSessions.ts

// Stato della prenotazione per WhatsApp
export interface BookingState {
  step: "idle" | "collecting" | "completed";
  service?: string;
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
  lastCompletedAt?: number;
}

// Semplice memoria in RAM per le sessioni WhatsApp.
// Va benissimo per la demo: non richiede database né variabili ambiente.
// Se il server viene riavviato, le sessioni si azzerano e il bot ricomincia
// a fare le domande da capo.
const sessions = new Map<string, BookingState>();

/**
 * Recupera la sessione per un numero WhatsApp.
 * Se non esiste, ne crea una nuova con step "idle".
 */
export async function getSessionForPhone(
  phone: string
): Promise<BookingState> {
  let session = sessions.get(phone);

  if (!session) {
    session = { step: "idle", phone };
    sessions.set(phone, session);
  }

  return session;
}

/**
 * Salva/aggiorna la sessione per un numero WhatsApp.
 */
export async function saveSessionForPhone(
  phone: string,
  state: BookingState
): Promise<void> {
  sessions.set(phone, state);
}