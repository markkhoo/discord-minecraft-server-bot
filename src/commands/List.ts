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
                content: "NOT CONNECTED to Minecraft Server!",
                ephemeral: true,
            });
            return;
        }

        const res = await rcon.send("whitelist list").catch(console.error);

        if (!res){
            await interaction.reply({
                content: "ERROR: Missing response",
                ephemeral: true,
            });
            return;
        }

        let listOfUsersString: string;

        if (res === "There are no whitelisted players") {
            listOfUsersString = "There are no players in the allow-list";
        } else {
            listOfUsersString = "*Players in the allow-list:* ";

            const listOfUsers = res.match(/(?<=: ).*/)[0].split(", ");
    
            listOfUsers.map((user, index) => {
                listOfUsersString += `\`${user}\``;
                listOfUsersString += index === listOfUsers.length - 1 ? "" : ", ";
            });
        }

        await interaction.reply({
            ephemeral: true,
            content: listOfUsersString
        });
    }
};