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

let QRCode: string | undefined;

const SESSION_FILE_PATH = path.resolve(__dirname, "..", "tokens", "whatsapp-session.json");

const token: ISessionWhatsapp | undefined = fs.existsSync(SESSION_FILE_PATH) ? require(SESSION_FILE_PATH) : undefined;

const client = new Client({
	session: token,
	authTimeoutMs: 10000,
	restartOnAuthFail: true,
	takeoverOnConflict: true,
	takeoverTimeoutMs: 10000,
});

client.on("qr", qr => {
	QRCode = qr;
});

client.on("authenticated", (session) => {
	console.log(session)
	if (!fs.existsSync(SESSION_FILE_PATH)) {
		fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
			console.log(err ? "Failed to create json" : "create token json file");
		});
	}
});

client.on("auth_failure", () => {
	console.log("Failed on authenticate!");

	fs.rm(SESSION_FILE_PATH, (err) => {
		console.log(err ? "Error on delete token" : "removed token");
	});
});

client.on("ready", () => {
	console.log("Client is ready!");
});

function getQRCode() {
	return QRCode;
}

export { client, getQRCode };
