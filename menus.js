import inquirer from "inquirer";
import {
  Player,
  warrior,
  mage,
  rogue,
  shared,
  createConfig,
} from "./player.js";
//import { firstTime, tutLVL } from "./voicelines/tutorial.js";

const MMquestions = [
  {
    type: "list",
    name: "MMselection",
    message: " ",
    choices: ["New Game", "Load Game", "Quit"],
  },
];

const newGameQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name? ",
  },
  {
    type: "list",
    message: "What character type would you like to be? ",
    choices: ["Rogue", "Warrior", "Mage"],
    name: "characterType",
  },
];

const mainUI = [
  {
    type: "list",
    message: " ",
    choices: [
      "Attack",
      "Potions Backpack",
      "Weapons Satchel",
      //"Search Area",
      "Quit",
    ],
    name: "UIchoice",
  },
];

const afterBattle = [
  {
    type: "list",
    message: " ",
    choices: [
      "Potions Backpack",
      "Weapons Satchel",
      "Search Area",
      "Next Floor",
      "Quit",
    ],
    name: "afterUIChoice",
  },
];

function quit(user) {
  user.health = 0;
  console.log("Goodbye!");
  return;
}
function nextFloor() {
  return true;
}

async function newGame() {
  const answers = await inquirer.prompt(newGameQuestions);
  const _characterType = answers.characterType.toLowerCase();
  if (_characterType === "rogue") {
    return new Player(answers.name, createConfig(rogue));
  }
  if (_characterType === "warrior") {
    return new Player(answers.name, createConfig(warrior));
  }
  return new Player(answers.name, createConfig(mage));
}

async function mainMenu() {
  const answers = await inquirer.prompt(MMquestions);
  const _selection = answers.MMselection.toLowerCase();
  if (_selection === "new game") {
    return newGame();
  }
  if (_selection === "load game") {
    return console.log("Begone!");
  }
  console.log("Goodbye!");
}

async function UI(user, enemy) {
  const answers = await inquirer.prompt(mainUI);
  const _select = answers.UIchoice.toLowerCase();
  /* const mapping = {
    attack: user.attack(enemy),
    ["weapons backpack"]: user.displayWeapons(),
    ["potions satchel"]: user.displayPotions(),
    //["search area"]: noOp,
    quit: quit(),
  }; */
  //const action = mapping[answers.UIchoice.toLowerCase()];
  //action();
  if (_select === "attack") {
    user.attack(enemy);
  } else if (_select === "weapons satchel") {
    user.displayWeapons();
  } else if (_select === "potions satchel") {
    user.displayPotions();
  } else {
    quit();
  }
}
function noOp() {
  console.log("no op");
  return;
}

async function afterUI(user) {
  const answers = await inquirer.prompt(afterBattle);
  const mapping = {
    ["potions backpack"]: user.displayPotions(),
    ["weapons satchel"]: user.displayWeapons(),
    ["search area"]: noOp,
    ["next floor"]: noOp,
    quit: quit(),
  };
}

// newGame();
//UI();
// mainMenu();

export { mainMenu, newGame, UI, afterUI };
