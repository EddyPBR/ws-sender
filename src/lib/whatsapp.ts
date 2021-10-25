import fs from "fs";
import path from "path";
import qrcode from "qrcode-terminal";
import { Client } from "whatsapp-web.js";

interface ISessionWhatsapp {
  WABrowserId: string;
  WASecretBundle: string;
  WAToken1: string;
  WAToken2: string;
}

const SESSION_FILE_PATH = path.resolve(__dirname, "..", "tokens", "whatsapp-session.json");

const token: ISessionWhatsapp | undefined = fs.existsSync(SESSION_FILE_PATH) ? require(SESSION_FILE_PATH) : undefined;

const client = new Client({
  session: token
});

client.on('qr', qr => {
  qrcode.generate(qr, {
    small: true
  });
});

client.on("authenticated", (session) => {
  console.log("Authenticated!");

  fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
    console.log(err ? "Failed to create json" : "create token json file");
  })
});

client.on("auth_failure", () => {
  console.log("Failed on authenticate!");

  fs.rm(SESSION_FILE_PATH, (err) => {
    console.log(err ? "Error on delete token" : "removed token");
  });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

export { client };
