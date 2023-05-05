import * as dotenv from 'dotenv';
dotenv.config();

export default {
  appID: process.env.DISCORD_APP_ID ?? '',
  token: process.env.DISCORD_TOKEN ?? '',
  rconHost: process.env.RCON_HOST ?? 'localhost',
  rconPass: process.env.RCON_PASS ?? 'password',
  rconPort: process.env.RCON_PORT ? Number(process.env.RCON_PORT) : 25575,
  superRoles: process.env.SUPER_ROLE_IDS ? (process.env.SUPER_ROLE_IDS).split(',') : [],
  healthPort: process.env.HEALTH_PORT ? Number(process.env.HEALTH_PORT) : 5000,
}