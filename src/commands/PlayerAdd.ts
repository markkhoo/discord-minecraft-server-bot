import { CommandInteraction, Client, GuildMember } from "discord.js";
import { ApplicationCommandType, ApplicationCommandOptionType } from 'discord-api-types/v10';
import { Command } from "../types/Command";
import { rcon, verifyConnection } from '../setRCON';
import env from '../config/environment';

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
        let isSuperUser: boolean = false;

        const connectStatus = await verifyConnection();

        if (!connectStatus) {
            await interaction.reply({
                content: "NOT CONNECTED to Minecraft Server!",
                ephemeral: true,
            });
            return;
        }

        // Check if the interaction is in a guild and the member is a GuildMember
        if (!interaction.inGuild() || !(interaction.member instanceof GuildMember)) {
            await interaction.reply({
                content: 'This command can only be used in a server.',
                ephemeral: true,
            });
            return;
        }

        if (env.SUPER_ROLE_IDS.length === 0) {
            isSuperUser = true;
        } else {
            interaction.member.roles.cache.map(role => {
                if (env.SUPER_ROLE_IDS.includes(role.id)) isSuperUser = true;
            });
        }
        
        if (env.SUPER_ROLE_IDS.length === 0) isSuperUser = true;

        if (!isSuperUser) {
            await interaction.reply({
                content: "You do not have permission to use this command!",
                ephemeral: true
            });
            return;
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