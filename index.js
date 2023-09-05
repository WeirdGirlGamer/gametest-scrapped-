import inquirer from "inquirer";

import { mainMenu, newGame, UI } from "./menus.js";
import { Companion } from "./playerCompanion.js";
import { Player } from "./player.js";
import { firstTime, tutLVL } from "./voicelines/tutorial.js";
import { floorSpawn } from "./rndGenerated/floorBattle.js";

async function main() {
  const user = await mainMenu();
  if (!user) {
    return;
  } else {
    await tutLVL(user);
  }
  while (user.health > 0) {
    await floorSpawn(user);
  }
}

main();

//console.log(`You are currently on floor ${user.floor}`)
