import * as dotenv from 'dotenv';
dotenv.config();

export default {
  appID: process.env.DISCORD_APP_ID ?? '',
  token: process.env.DISCORD_TOKEN ?? '',
  rconHost: process.env.RCON_HOST ?? '',
  rconPass: process.env.RCON_PASS ?? '',
  rconPort: process.env.RCON_PORT ?? '',
}