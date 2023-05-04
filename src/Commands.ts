import { Command } from "./types/Command";
import { List } from "./commands/List";
import { PlayerAdd } from "./commands/PlayerAdd";
import { PlayerRemove } from "./commands/PlayerRemove";
import { Status } from "./commands/Status";

export const Commands: Command[] = [List, PlayerAdd, PlayerRemove, Status];