import { Request, Response } from "express";
import { sendMessage } from "@src/services/whatsapp/sendMessage";

interface IHandleRequestBody {
  phone: number;
  message: string;
}

class SendWhatsappMessageController {
	async handle(request: Request, response: Response) {
		const { phone, message }: IHandleRequestBody = request.body;

		try {
			await sendMessage({
				phone,
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

export { SendWhatsappMessageController };