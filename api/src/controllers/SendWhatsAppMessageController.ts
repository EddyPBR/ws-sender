import { Request, Response } from "express";
import { sendMessage } from "@services/WhatsAppSendMessageService";

interface IHandleRequestBody {
	sessionId: string;
	phone: string;
	message: string;
}

class SendWhatsAppMessageController {
	async handle(request: Request, response: Response) {
		const { sessionId, phone, message }: IHandleRequestBody = request.body;

		try {
			await sendMessage({
				sessionId,
				phone: Number(phone),
				message
			});

			return response.status(200).json({
				message: "Message has sended!"
			});
		} catch (err) {
			return response.status(400).json({
				message: err.message || "Failed to send message"
			});
		}
	}
}

export { SendWhatsAppMessageController };