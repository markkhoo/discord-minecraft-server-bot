import { Rcon } from "rcon-client"

class RconWrapper {
  private rcon: Rcon;
  private rconConnectionState: boolean = false;

  constructor(host: string, port: number, password: string) {
    this.rcon = new Rcon({
      host: host,
      port: port,
      password: password,
    });

    this.rcon.on("connect", () => {
      this.rconConnectionState = true;
      console.log("rcon: connected");
    });
    this.rcon.on("authenticated", () => {
      console.log("rcon: authenticated");
    });
    this.rcon.on("end", () => {
      this.rconConnectionState = false;
      console.log("rcon: end");
    });
    this.rcon.on("error", (e) => {
      console.log("An error occured in the rcon server: " + (e ? e.message : 'No error message'), e);
    });
  }

  async connect() {
    if (!this.rconConnectionState) {
      await this.rcon.connect().then((rs)=> {
        this.rconConnectionState = true;
      }).catch(err => {
        this.rconConnectionState = false;
        throw new Error(err.message);
      });
    } else {
      throw new Error('Already connected to RCON server');
    }
  }

  async end() {
    if (this.rconConnectionState) {
      await this.rcon.end().then(() => {
        this.rconConnectionState = false;
      });
    } else {
      throw new Error('Already disconnected to RCON server');
    }
  }

  async send(command: string) {
    if (this.rconConnectionState) {
      try {
        return await this.rcon.send(command);
      } catch (err) {
        throw new Error('Failed to send to RCON server');
      }
    } else {
      throw new Error('Not connected to RCON server');
    }
  }

  async isConnected() {
    return this.rconConnectionState;
  }
}

export default RconWrapper;