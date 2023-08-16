import { Client, Guild } from "discord.js";
import prisma from "~/functions/database";

export default async (client: Client<true>, guild: Guild) => {
  await prisma.settings.delete({ where: { guildId: guild.id } });
}