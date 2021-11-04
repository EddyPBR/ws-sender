import "dotenv/config";

import { serverHttp } from "@src/app";

serverHttp.listen(process.env.PORT, async () => {
	console.log("Server listen on Port:", process.env.PORT);
});
