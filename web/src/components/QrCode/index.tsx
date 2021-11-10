import { QRCodeBox } from "./styles";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
import { api } from "@services/api";

import { Load } from "@components/Load";

interface IGetQRCodeResponseData {
  qrCode: string;
}

export function QrCode() {
  const [qrCodeSession, setQrCodeSession] = useState<string | undefined>();

  useEffect(() => {
    const getQRCode = async () => {
      const sessionId = localStorage.getItem("was@sessionId");

      if (!sessionId) {
        setQrCodeSession(undefined);
        return;
      }

      try {
        const { data: { qrCode } } = await api.post<IGetQRCodeResponseData>("whatsapp/qrcode", {
          sessionId
        });

        setQrCodeSession(qrCode);
      } catch {
        localStorage.removeItem("was@sessionId");
        setQrCodeSession(undefined);
      }
    }

    setInterval(() => getQRCode(), 4000);
  }, []);

  return (
    <QRCodeBox>
      {qrCodeSession
        ? <QRCode value={qrCodeSession} />
        : <Load size={32} />
      }
    </QRCodeBox>
  );
}