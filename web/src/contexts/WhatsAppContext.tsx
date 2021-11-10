import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "@services/api";
import toast from "react-hot-toast";

interface IWhatsAppProvider {
  children: ReactNode;
}

interface IWhatsAppContextData {
  sessionId: string | null;
  qrCode: string | null;
  isLoadingSession: boolean;
  handleCreateWhatsAppSession: () => Promise<void>;
  handleGetQrCode: () => Promise<void>;
}

interface ICreateWhatsAppSesssionResponse {
  sessionId: string;
}

interface IGetQrCodeResponse {
  qrCode: string;
}

export const WhatsAppContext = createContext({} as IWhatsAppContextData);

export function WhatsAppProvider({ children }: IWhatsAppProvider) {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);

  const [isLoadingSession, setIsLoadingSession] = useState(false);

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

  useEffect(() => {
    const sessionId = localStorage.getItem("was@sessionId");
    sessionId ? setSessionId(sessionId) : null;
  }, []);

  return (
    <WhatsAppContext.Provider value={{
      sessionId,
      qrCode,
      isLoadingSession,
      handleCreateWhatsAppSession,
      handleGetQrCode
    }}>
      {children}
    </WhatsAppContext.Provider>
  );
}

export const WhatsAppConsumer = WhatsAppContext.Consumer;