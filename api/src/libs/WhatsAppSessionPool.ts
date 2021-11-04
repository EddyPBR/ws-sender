import { WhatsAppSession } from "@libs/WhatsAppSession";
import type { ClientSession } from "whatsapp-web.js";

class WhatsAppPool {
  protected sessions: WhatsAppSession[] = [];

  constructor() {}

  createNewWhatsAppSession(session?: ClientSession) {
    const newSession = new WhatsAppSession();
    const id = newSession.getId();

    this.sessions = [...this.sessions, newSession];
    return id;
  }

  getWhatsAppSession(id: string) {
    return this.sessions.find(session => session.getId() === id);
  }
}

const whatsAppSessions = new WhatsAppPool();

export { whatsAppSessions };