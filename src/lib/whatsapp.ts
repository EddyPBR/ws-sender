import fs from "fs";
import path from "path";
import qrcode from "qrcode-terminal";
import { Client } from "whatsapp-web.js";

const SESSION_FILE_PATH = path.resolve(__dirname, "..", "tokens", "whatsapp-session.json");

const tokenExists = fs.existsSync(SESSION_FILE_PATH);

const client = new Client({
  session: tokenExists ? require(SESSION_FILE_PATH) : undefined,
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
