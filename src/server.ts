import "dotenv/config";

import { app } from "@src/app";

import { client } from "@src/lib/whatsapp";

app.listen(process.env.PORT, () => {
  console.log("Server listen on Port:", process.env.PORT);
  client.initialize()
    .then(() => console.log("Whatsapp client is on!"))
    .catch(() => console.log("Failed to init whatsapp client"))
});
