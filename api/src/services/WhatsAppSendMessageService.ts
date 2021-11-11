import { whatsAppSessions } from "@libs/WhatsAppSessionPool";
import { ApplicationException } from "@exceptions/ApplicationException";

interface ISendMessageProps {
  sessionId: string;
  phone: number;
  message: string;
}

export async function sendMessage({ sessionId, phone, message }: ISendMessageProps) {
  const session = whatsAppSessions.getWhatsAppSession(sessionId);

  if(!session) {
    throw new ApplicationException("WhatsApp session not found", 400);
  }

  const uri = `${phone}@c.us`;

  try {
    await session.getClient().sendMessage(uri, message);
  } catch(err) {
    if(err?.message.includes("(reading 'WidFactory')")) {
			throw new ApplicationException("Failed to send message, no connection with whatsapp-web", 500);
		}

    throw new ApplicationException("Failed to send message", 400);
  }
}
