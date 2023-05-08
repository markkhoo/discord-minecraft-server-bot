# discord-minecraft-server-bot

Does your Discord server have a private Minecraft Server? Do Discord members keep pinging you or direct messaging you to add them onto the Minecraft's allow-list?

This is a light-weight discord bot that connects to your Minecraft server through the [RCON](https://wiki.vg/RCON#:~:text=RCON%20is%20a%20protocol%20that,Source%20RCON%20protocol%20for%20Minecraft.) protocol. It can be deployed on the same ~~container~~ machine as the server, on a hosting service, or in a command block. Discord members who have access to the bot can use commands to add themselves to the server's allow-list. Add and remove Minecraft users can be limited to Discord members with roles you define if you don't trust the Discord members!


## Developing Your Own Bot

### Creating a Discord App and Getting the App Token
If you want to use this as a template to build your own bot you will need to build your own [Discord App](https://discord.com/developers/docs/getting-started). Once you've created an App, you can now [Set Up Your Bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html#what-is-a-token-anyway). You'll need the **Token** from you bot. Unless you expand on this bot with features that require permissions, the bot does not need any permissions set.


### Enabling RCON On Your Minecraft Server
When you deploy your Minecraft Server, a `server.properties` file gets created. Open this file with a text editor set `enable-rcon=true`. Take note of the values for `rcon.password` and `rcon.port`. You can change these to whatever you specify. It is strongly recommended to use a strong password.


### Setting Environment Variables
A development environment files are provided in this repository. Create an `.env` file if you want to devlop locally. 

The 4 essential varriables to update are:

* Set `DISCORD_TOKEN` to **Token** that you recieved from when you created your discord App.
* Set `RCON_HOST` to the **IP** of the Minecraft server. If the Minecraft server is running locally, it can be set to `'localhost'` if the bot is running on your machine or `host.docker.internal` if the bot is running in a Docker Container.
* Set `RCON_PASS` to the **password** that you specified in the `server.properties` file.
* Set `RCON_PORT` to the **number** noted in the `server.properties` file.

Additional environment variables:

* `SUPER_ROLE_IDS` can be set to a comma separated list of **id**'s of roles in your discord server. Setting this allows discord users with that role to have exclusive access to the `/add` and `/remove` commands. *Note: This is likely not the ideal way to set role id's if this bot is deployed on multiple servers. Further development would be required.*


### Running the Bot Locally
Navigate to this repository in your CLI and run the command  `npm ci` to install the nessesary node modules to run this node application. Use `npm start` to run the bot with **nodemon**. Starting the bot this way is also useful for development. Use `npm run build` to build the node application.


### Docker Deployment
Make sure you have [Docker](https://www.docker.com/) installed if you want to deploy this bot in a docker container. A `docker-compose.yml` file is provided in this repository. Navigate to this repository in your CLI and run the command  `docker-compose up -d` to build a docker container and run the bot.

### Docker Hub (WIP)
*TO DO*

## Discord Commands

### ```/list ```
Lists the players in the server allow-list.

### ```/add <Minecraft-Username>```
Adds a player to the server allow-list. This command can be limited to specified roles in the Discord server.

### ```/remove <Minecraft-Username>```
Removes a player from the server allow-list. This command can be limited to specified roles in the Discord server.

### ```/status ```
Shows the connection status of the Discord bot to the Minecraft server.

---
## Acknowledgements
Boilerplate of this bot comes from Sabe.io's [tutorial](https://sabe.io/tutorials/how-to-build-discord-bot-typescript).