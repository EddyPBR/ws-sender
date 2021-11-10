import { Request, Response } from "express";
import { whatsAppSessions } from "@libs/WhatsAppSessionPool";

class GetSessionQRCodeController {
  async handle(request: Request, response: Response) {
    const { sessionId } = request.body;

    const qrCode = whatsAppSessions
      .getWhatsAppSession(sessionId)
      .getQRCode();

    return response.status(200).json({
      qrCode
    });
  }
}

export { GetSessionQRCodeController };