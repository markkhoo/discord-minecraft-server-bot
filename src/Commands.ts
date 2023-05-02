import { Command } from "./types/Command";
import { List } from "./commands/List";
import { Ping } from "./commands/Ping";
import { PlayerAdd } from "./commands/PlayerAdd";
import { Status } from "./commands/Status";

export const Commands: Command[] = [List, Ping, PlayerAdd, Status];