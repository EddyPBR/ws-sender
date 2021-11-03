import "dotenv/config";

import { serverHttp } from "@src/app";

import { whatsapp } from "@src/lib/whatsapp";

serverHttp.listen(process.env.PORT, () => {
	console.log("Server listen on Port:", process.env.PORT);

	whatsapp
		.create()
		.initialize()
		.then((response) => {
			console.log(response)
		});
});
