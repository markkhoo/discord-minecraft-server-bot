# discord-minecraft-server-bot

Does your Discord server have a private Minecraft Server? Do Discord members keep pinging you or direct messaging you to add them onto the Minecraft's allow-list?

This is a light-weight discord bot that connects to your Minecraft server through the [RCON](https://wiki.vg/RCON#:~:text=RCON%20is%20a%20protocol%20that,Source%20RCON%20protocol%20for%20Minecraft.) protocol. It can be deployed on the same ~~container~~ machine as the server, on a hosting service, or in a command block. Discord members who have access to the bot can use commands to add themselves to the server's allow-list. Add and remove Minecraft users can be limited to Discord members with roles you define if you don't trust the Discord members!


## Building Your Own Bot

### Building a Discord App and Getting the App Token
If you want to use this as a template to build your own bot you will need to build your own [Discord App](https://discord.com/developers/docs/getting-started). Once you've created an App, you can now [Set Up Your Bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html#what-is-a-token-anyway). You'll need the **Token** from you bot. Unless you expand on this bot with features that require permissions, the bot does not need any permissions set.

### Enabling RCON On Your Minecraft Server
When you deploy your Minecraft Server, a `server.properties` gets created. Open this file with a text editor set `enable-rcon=true`. Take note of the values for `rcon.password` and `rcon.port`. These can be changed to whatever you specify. It is strongly suggested to change and use a strong password.

### Setting environment variables (WIP)
A development environment file (`.env.dev`) is provided in this repository. Change the file name from `.env.dev` to `.env` if you want to devlop locally. The 4 essential varriables to update are:

* Set `DISCORD_TOKEN` to **Token** that you recieved from when you created your discord App.
* Set `RCON_HOST` to the **IP** of the Minecraft server. It can be set to `'localhost'` if the Minecraft server is running locally.
* Set `RCON_PASS` to the **password** that you specified in the `server.properties` file.
* Set `RCON_PORT` to the **number** noted in the `server.properties` file.

Additional environment variables:

* `SUPER_ROLE_IDS` can be set to a comma separated list of **id**'s of roles in your discord server. Setting this allows discord users with that role to have exclusive access to the `/add` and `/remove` commands. *Note: This is likely not the ideal way to set role id's if this bot is deployed on multiple servers. Further development would be required.*
* `DISCORD_APP_ID` is currently not used in this code but an **Application ID** is needed to access different parts of the Discord API. Feel free to use it here.

### Deployment (WIP)
*TO DO*


## Discord Commands

### ``` /list ```
Lists the players in the server allow-list.

### ``` /add <Minecraft-Username>```
Adds a player to the server allow-list. This command can be limited to specified roles in the Discord server.

### ``` /remove <Minecraft-Username>```
Removes a player from the server allow-list. This command can be limited to specified roles in the Discord server.

### ``` /status ```
Shows the connection status of the Discord bot to the Minecraft server.

---
## Acknowledgements
Boilerplate of this bot comes from Sabe.io's [tutorial](https://sabe.io/tutorials/how-to-build-discord-bot-typescript).