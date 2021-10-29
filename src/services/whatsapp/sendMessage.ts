import { client } from "@src/lib/whatsapp";
import { ApplicationException } from "@src/exceptions/ApplicationException";

interface ISendMessageProps {
  phone: number;
  message: string;
}

export async function sendMessage({ phone, message }: ISendMessageProps) {
	const uri = `55${phone}@c.us`;

	try {
		await client.sendMessage(uri, message);
	} catch (err) {
		if(err?.message.includes("(reading 'WidFactory')")) {
			throw new ApplicationException("Failed to send message, no connection with whatsapp-web", 500);
		}

		throw new ApplicationException("Failed to send message", 400);
	}
}
