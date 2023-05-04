import env from './config/environment';
import RconWrapper from "./config/rcon";

export const rcon = new RconWrapper(env.rconHost, env.rconPort, env.rconPass);

export const verifyConnection = async ():Promise<boolean> => {

  const initStatus = await rcon.isConnected();

  let confirmedStatus: boolean = initStatus;

  if (!initStatus) {
    await rcon.connect().catch(console.error);
    confirmedStatus = await rcon.isConnected();
  }

  return confirmedStatus
}