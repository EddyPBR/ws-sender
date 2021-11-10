import { useContext } from "react";
import { WhatsAppContext } from "@contexts/WhatsAppContext";

export function useWhatsApp() {
  const value = useContext(WhatsAppContext);
  return value;
}