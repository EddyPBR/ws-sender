import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "@services/api";
import toast from "react-hot-toast";
import io from "socket.io-client";

interface IWhatsAppProvider {
  children: ReactNode;
}

interface IWhatsAppContextData {
  sessionId: string | null;
  qrCode: string | null;
  whatsAppSession: IWhatsAppSession | null;
  isLoadingSession: boolean;
  isSendingMessage: boolean;
  handleCreateWhatsAppSession: () => Promise<void>;
  handleGetQrCode: () => Promise<void>;
  handleSendMessage: (message: string, phone: string) => Promise<void>;
}

interface ICreateWhatsAppSesssionResponse {
  sessionId: string;
}

interface IGetQrCodeResponse {
  qrCode: string;
}

interface IWhatsAppSession {
  WABrowserId: string,
  WASecretBundle: string,
  WAToken1: string,
  WAToken2: string,
}

export const WhatsAppContext = createContext({} as IWhatsAppContextData);

export function WhatsAppProvider({ children }: IWhatsAppProvider) {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [whatsAppSession, setWhatsAppSession] = useState<IWhatsAppSession | null>(null);

  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  async function handleCreateWhatsAppSession() {
    setIsLoadingSession(true);

    try {
      const { data: { sessionId } } = await api.post<ICreateWhatsAppSesssionResponse>("whatsapp/start");
      localStorage.setItem("was@sessionId", sessionId);
      setSessionId(sessionId);
    } catch {
      toast.error("Falha ao inicializar sessão do WhatsApp");
      setIsLoadingSession(false);
    }
  }

  async function handleGetQrCode() {
    if (!sessionId) {
      return;
    }

    try {
      const { data: { qrCode } } = await api.post<IGetQrCodeResponse>("whatsapp/qrcode", {
        sessionId
      });

      return setQrCode(qrCode);
    } catch {
      localStorage.removeItem("was@sessionId");
      setQrCode(null);
      setSessionId(null);
    }
  }

  async function handleSendMessage(message: string, phone: string) {
    if(!sessionId || !whatsAppSession) {
      toast.error("Necessário inicar uma sessão!");
      return;
    }

    setIsSendingMessage(true);
    try {
      api.post("/whatsapp/send", {
        sessionId,
        message,
        phone
      });
    } catch (err) {
      toast.error(`Falha ao enviar mensagem para: ${phone}.`);
    } finally {
      setIsSendingMessage(false);
    }
  }

  useEffect(() => {
    const sessionId = localStorage.getItem("was@sessionId");
    sessionId ? setSessionId(sessionId) : null;
  }, []);

  useEffect(() => {
    const whatsAppSessionJSON = localStorage.getItem("was@whatsappSession");

    if(!whatsAppSessionJSON) {
      return;
    }

    const whatsAppSession = JSON.parse(whatsAppSessionJSON) as IWhatsAppSession;
    setWhatsAppSession(whatsAppSession);
  }, []);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL || "");

    socket.on("new_connection", (session: IWhatsAppSession) => {
      localStorage.setItem("was@whatsappSession", JSON.stringify(session));
      setWhatsAppSession(session);
    });
    
    socket.on("disconnected", () => {
      localStorage.removeItem("was@whatsappSession");
      localStorage.removeItem("was@sessionId");
      setQrCode(null);
      setSessionId(null);
      setWhatsAppSession(null);
    });
  }, []);

  return (
    <WhatsAppContext.Provider value={{
      sessionId,
      qrCode,
      whatsAppSession,
      isLoadingSession,
      isSendingMessage,
      handleCreateWhatsAppSession,
      handleGetQrCode,
      handleSendMessage
    }}>
      {children}
    </WhatsAppContext.Provider>
  );
}

export const WhatsAppConsumer = WhatsAppContext.Consumer;