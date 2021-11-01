import type { NextPage } from "next";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";

import { Container, QRCodeBox } from "../styles/global";

import { api } from "../services/api";

const Home: NextPage = () => {
  const [QRCodeSession, setQRCodeSession] = useState<string | undefined>();

  useEffect(() => {
    const getQRCode = async () => {
      try {
        const response = await api.get("qrcode");
        const { QRCode } = response.data;
        setQRCodeSession(QRCode);
      } catch (err) {
        console.log(err);
      }
    }

    getQRCode();
  }, []);

  return (
    <Container>
      { QRCodeSession && 
        <QRCodeBox>
          <QRCode value={QRCodeSession} /> 
        </QRCodeBox>
      }
    </Container>
  )
}

export default Home
