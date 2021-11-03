import { io } from "../app";
import { Client, ClientSession } from "whatsapp-web.js";

class WhatsAppClient {
	protected qrCode: string | undefined;
	protected session: ClientSession | undefined;
	protected client: Client;

	constructor() {
		this.client = new Client({
			session: this.getSession(),
			authTimeoutMs: 10000,
			restartOnAuthFail: true,
			takeoverOnConflict: true,
			takeoverTimeoutMs: 10000,
		});

		this.client.on("qr", qr => {
			this.setQRCode(qr);
		});

		this.client.on("authenticated", (session) => {
			this.setSession(session);
			io.emit("new_connection", session);
		});

		this.client.on("ready", () => {
			console.log("Client is ready!");
		});
	}

	getSession() {
		return this.session;
	}

	setSession(session: ClientSession) {
		this.session = session;
	}

	getQRCode() {
		return this.qrCode;
	}

	setQRCode(qrCode: string) {
		this.qrCode = qrCode;
	}

	getClient() {
		return this.client;
	}

	setClient(client: Client) {
		this.client = client;
	}
}

const whatsapp = new WhatsAppClient();

export { whatsapp, WhatsAppClient };