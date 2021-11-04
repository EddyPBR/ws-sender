import { WhatsAppClient } from "@libs/WhatsAppClient";
import type { ClientSession } from "whatsapp-web.js";
import { v4 as uuid } from "uuid";

class WhatsAppSession extends WhatsAppClient {
  protected id: string;

  constructor(session?: ClientSession) {
    super();
    this.id = uuid();
  }

  getId() {
    return this.id;
  }
}

export { WhatsAppSession };