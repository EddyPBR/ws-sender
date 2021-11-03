import { QRCodeBox } from "./styles";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
import { api } from "@services/api";

import { Load } from "@components/Load";

export function QrCode() {
  const [qrCodeSession, setQrCodeSession] = useState<string | undefined>();

  useEffect(() => {
    const getQRCode = async () => {
      try {
        const response = await api.get("qrcode");
        const { qrCode } = response.data;
        setQrCodeSession(qrCode);
      } catch (err) {
        console.log(err);
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