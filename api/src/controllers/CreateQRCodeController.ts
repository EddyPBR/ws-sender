import { Request, Response } from "express";

import { getQRCode } from "@src/lib/whatsapp";

class CreateQRCodeController {
  async handle(request: Request, response: Response) {
    try {
      const QRCode = getQRCode();

      if(!QRCode) {
        return response.status(500).json({
          message: "Whatsapp client not started properly"
        });
      }

      return response.status(200).json({ QRCode });
    } catch (err) {
      return response.status(500).json({
        message: "Failed to init whatsapp client"
      });
    }
  }
}

export { CreateQRCodeController };