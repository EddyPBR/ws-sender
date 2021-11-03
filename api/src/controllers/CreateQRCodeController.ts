import { Request, Response } from "express";

import { whatsapp } from "@src/lib/whatsapp";

class CreateQRCodeController {
  async handle(request: Request, response: Response) {
    try {
      const qrCode = whatsapp.getQRCode();

      if(!qrCode) {
        return response.status(500).json({
          message: "Whatsapp client not started properly"
        });
      }

      return response.status(200).json({ qrCode });
    } catch (err) {
      return response.status(500).json({
        message: "Failed to init whatsapp client"
      });
    }
  }
}

export { CreateQRCodeController };