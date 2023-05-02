import { CommandInteraction, Client } from "discord.js";
import { ApplicationCommandType, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { Command } from "../types/Command";
import { rcon, verifyConnection } from '../setRCON';

export const PlayerAdd: Command = {
    name: "add",
    description: "Adds a minecraft username to the allowed players in the Minecraft Server",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            type: ApplicationCommandOptionType.String,
            name: 'player',
            description: 'Valid Minecraft Username',
            required: true,
        }
    ],
    run: async (client: Client, interaction: CommandInteraction) => {
        const connectStatus = await verifyConnection();

        if (!connectStatus) {
            await interaction.reply({
                content: "NOT CONNECTED to Minecraft Server!"
            });
        }

        const userData = interaction.options.get('player');
        const user = String(userData.value);

        const res = await rcon.send(`whitelist add ${user}`).catch(console.error);

        await interaction.reply({
            ephemeral: true,
            content: res ? res : "ERROR: Missing response"
        });
    }
};