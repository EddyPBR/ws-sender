import { io } from "../app";
import { Client, ClientSession } from "whatsapp-web.js";

class WhatsAppClient {
	protected qrCode: string | undefined;
	protected session: ClientSession | undefined;

	create(session?: ClientSession) {
		const client = new Client({
			session: this.getSession(),
			authTimeoutMs: 10000,
			restartOnAuthFail: true,
			takeoverOnConflict: true,
			takeoverTimeoutMs: 10000,
		});

		client.on("qr", qr => {
			this.setQRCode(qr);
		});

		client.on("authenticated", (session) => {
			this.setSession(session);
			io.emit("new_connection", session);
		});

		client.on("ready", () => {
			console.log("Client is ready!");
		});

		return client;
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
}

const whatsapp = new WhatsAppClient();

export { whatsapp, WhatsAppClient };