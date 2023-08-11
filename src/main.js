import registerRoutes from "./handler.js";
import Express from "express";
import cors from "cors";
import requestIp from "request-ip";
import { config } from "dotenv";
import "colors";

import { Client, GatewayIntentBits, Partials } from "discord.js";
const client = new Client({
  intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds],
  partials: [Partials.User, Partials.GuildMember],
});

const app = Express();

app.use(requestIp.mw());
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

config();
registerRoutes(app);

app.listen(80, () => {
  console.log("[📡 EXPRESS SERVER]".bgMagenta, "Online: Port 80.".magenta);
  client.login(process.env.BOT_TOKEN).then(() => {
    console.log("[🤖 DISCORD BOT]".bgCyan, "Connected.".cyan);
  });
});

export default client;
process.on("unhandledRejection", (reason, promise) => {
  console.log(reason, promise);
});
process.on("uncaughtException", (error, origin) => {
  console.log(error, origin);
});
process.on("uncaughtExceptionMonitor", (error, origin) => {
  console.log(error, origin);
});
