import env from './config/environment';
import { Client, GatewayIntentBits } from 'discord.js';
import { rcon } from './setRCON';
import app from './listeners/health';
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

const HEALTH_PORT = 5000;

console.log("Bot is starting...");

app.listen(HEALTH_PORT, () => {
  console.log(`Health check running on port: ${HEALTH_PORT}`);
});

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

ready(client);
interactionCreate(client);

client.login(env.DISCORD_TOKEN);

rcon.connect().catch(console.error);