import { CommandInteraction, Client } from "discord.js";
import { ApplicationCommandType, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { Command } from "../types/Command";
import { verifyConnection } from '../setRCON';

export const Status: Command = {
    name: "status",
    description: "Is the bot connected to the Minecraft Server?",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const connectStatus = await verifyConnection();

        await interaction.reply({
            content: connectStatus ? "Connected to Minecraft Server" : "NOT CONNECTED to Minecraft Server!"
        });
    }
};