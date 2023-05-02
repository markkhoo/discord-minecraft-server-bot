import { CommandInteraction, Client } from "discord.js";
import { ApplicationCommandType, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { Command } from "../types/Command";

export const Ping: Command = {
    name: "ping",
    description: "Returns Pong!",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            type: ApplicationCommandOptionType.String,
            name: 'bingus',
            description: 'Submit some optional BINGUS and experience the copy cat!',
            required: false,
        }
    ],
    run: async (client: Client, interaction: CommandInteraction) => {
        const message = interaction.options.get('bingus')

        await interaction.reply({
            ephemeral: true,
            content: message ? String(message.value) : `Pong!`
        });
    }
};