import env from './config/environment';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

console.log("Bot is starting...");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

ready(client);
interactionCreate(client);

client.login(env.token);