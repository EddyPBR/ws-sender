import { client } from "@src/lib/whatsapp";

interface ISendMessageProps {
  phone: number;
  message: string;
}

export async function sendMessage({ phone, message }: ISendMessageProps) {
  const uri = `55${phone}@c.us`;

  try {
    await client.sendMessage(uri, message);
  } catch (err) {
    throw new Error(err.message || "Failed to send message");
  }
}
