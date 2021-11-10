import { QRCodeBox } from "./styles";
import QRCode from "react-qr-code";
import { useEffect } from "react";
import { useWhatsApp } from "@hooks/useWhatsApp";

import { Load } from "@components/Load";

export function QrCode() {
  const { qrCode, handleGetQrCode } = useWhatsApp();

  useEffect(() => {
    const LoadQrCode = setTimeout(() => {
      handleGetQrCode();
    }, 4000);

    return () => clearTimeout(LoadQrCode);
  }, []);

  return (
    <QRCodeBox>
      {qrCode
        ? <QRCode value={qrCode} />
        : <Load size={32} />
      }
    </QRCodeBox>
  );
}