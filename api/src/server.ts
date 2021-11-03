import "dotenv/config";

import { serverHttp } from "@src/app";

import { whatsapp } from "@src/lib/whatsapp";

serverHttp.listen(process.env.PORT, async () => {
	console.log("Server listen on Port:", process.env.PORT);

	await whatsapp.getClient().initialize();
});
