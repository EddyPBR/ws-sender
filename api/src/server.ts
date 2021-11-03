import "dotenv/config";

import { serverHttp } from "@src/app";

import { client } from "@src/lib/whatsapp";

serverHttp.listen(process.env.PORT, () => {
	console.log("Server listen on Port:", process.env.PORT);
	client.initialize()
		.then(() => console.log("Whatsapp client is on!"))
		.catch((err) => {
			console.log(err);
			console.log("Failed to init whatsapp client"); 
		});
});
