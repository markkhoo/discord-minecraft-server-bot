import { CommandInteraction, Client } from "discord.js";
import { ApplicationCommandType, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { Command } from "../types/Command";
import { rcon, verifyConnection } from '../setRCON';

export const List: Command = {
    name: "list",
    description: "Lists the allowed players in the Minecraft Server",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const connectStatus = await verifyConnection();

        if (!connectStatus) {
            await interaction.reply({
                content: "NOT CONNECTED to Minecraft Server!"
            });
        }

        const res = await rcon.send("whitelist list").catch(console.error);

        await interaction.reply({
            ephemeral: true,
            content: res ? res : "ERROR: Missing response"
        });
    }
};