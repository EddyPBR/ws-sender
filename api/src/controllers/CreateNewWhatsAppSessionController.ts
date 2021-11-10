import { Request, Response } from "express";
import { whatsAppSessions } from "@libs/WhatsAppSessionPool";

const TIMEOUT = 3000; // time to init whatsapp web js client;

class CreateNewWhatsAppSessionController {
  async handle(request: Request, response: Response) {
    const whatsAppSessionId = whatsAppSessions.createNewWhatsAppSession();

    try {
      whatsAppSessions
        .getWhatsAppSession(whatsAppSessionId)
        .getClient()
        .initialize();

      setTimeout(() => {
        return response.status(200).json({
          sessionId: whatsAppSessionId,
        });
      }, TIMEOUT);
    } catch {
      return response.status(400).json({
        message: "Error on initialize whatsapp session"
      });
    }
  }
}

export { CreateNewWhatsAppSessionController };