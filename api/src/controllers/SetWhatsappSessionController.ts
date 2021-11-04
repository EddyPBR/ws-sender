import { Request, Response } from "express";
import { whatsapp } from "@libs/whatsapp";
import type { ClientSession } from "whatsapp-web.js";

class SetWhatsappSessionController {
	async handle(request: Request, response: Response) {
		const session: ClientSession = request.body;

    whatsapp.setSession(session);
    await whatsapp.getClient().resetState();

    return response.status(200).json({
      message: "Session started!"
    });
	}
}

export { SetWhatsappSessionController };