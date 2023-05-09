import { CommandInteraction, Client } from "discord.js";
import { ApplicationCommandType, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { Command } from "../types/Command";
import { rcon, verifyConnection } from '../setRCON';

export const Online: Command = {
    name: "online",
    description: "Lists the players online in the Minecraft Server",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const connectStatus = await verifyConnection();

        if (!connectStatus) {
            await interaction.reply({
                content: "NOT CONNECTED to Minecraft Server!",
                ephemeral: true,
            });
            return;
        }

        const res = await rcon.send("list").catch(console.error);

        await interaction.reply({
            ephemeral: true,
            content: res ? res :  "ERROR: Missing response",
        });
    }
};