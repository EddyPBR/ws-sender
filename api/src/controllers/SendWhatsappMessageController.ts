import { Request, Response } from "express";
import { sendMessage } from "@services/whatsapp/sendMessage";

interface IHandleRequestBody {
  phone: string;
  message: string;
}

class SendWhatsappMessageController {
	async handle(request: Request, response: Response) {
		const { phone, message }: IHandleRequestBody = request.body;

		const formatedPhone = Number(phone.replace(/[(-)- ]/g, ""));

		try {
			await sendMessage({
				phone: formatedPhone,
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