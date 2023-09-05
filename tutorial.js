import inquirer from "inquirer";
import { Weapon } from "../weapons.js";
//import { Companion } from "../playerCompanion.js";
//import { Player } from "./player.js";
//import { UI } from "../menus.js";

const tutVL = [
  {
    type: "input",
    message: "What is your name child? ",
    name: "name",
  },
];

const firstTimeVL = [
  {
    type: "list",
    message: "Is it your first time here? ",
    choices: ["yes", "no"],
    name: "firstTime",
  },
];

async function firstTime(user) {
  const answers = await inquirer.prompt(firstTimeVL);
  if (answers.firstTime === "yes") {
    console.log(
      "Welcome to the dungeon young one. I will teach you what I know."
    );
    console.log(
      "This is your basic menu. It gives you the options to attack, check your inventories and surroundings, or quit.\n...\n"
    );
    console.log("Attacking attacks the enemy on your floor.\n...\n");
    console.log(
      "Opening your potions backpack will show you what potions you carry."
    );
    if (user.charType === "Mage") {
      console.log(
        "Since you're a mage, you will have access to more types of potions that can cause\nlasting effects on the enemy. Like bleeding, burning,etc.\n...\n"
      );
    } else {
      console.log(
        "Since you're not a mage, you will not have access to the types of potions that\ncan cause lasting effects on an enemy. But you will still have access to healing potions\n...\n"
      );
    }
    console.log(
      "Your weapons satchel carries all of the weapons you pick up throughout your journey.\nIf you don't need them you can always leave them on the ground."
    );
    if (user.charType === "Mage") {
      console.log("Mages have access to staffs, wands, and potions.");
    } else if (user.charType === "Warrior") {
      console.log("Warriors have access to spears, axes, shields, and swords.");
    } else {
      console.log("Rogues have access to knives, daggers, and pistols");
    }
    console.log(
      "If you ever pick up a weapon that doesn't fit your character type, don't be quick to drop it.\nA merchant may be waiting up ahead that'd be willing to buy it from you.\n...\n"
    );
    console.log(
      "Searching the area searches the floor you're on. It may lead to good loot or a surprise attack, so be careful.\n...\n"
    );
    console.log(
      `I'll let you be on your way now ${user.name}. Be safe. Maybe we'll cross paths again in the future.\n`
    );
    const firstWeapon = new Weapon(user);
    const tw1 = new Weapon(user);
    const tw2 = new Weapon(user);
    const tw3 = new Weapon(user);
    user.weapon = firstWeapon;
    //return UI(user)
  } else {
    console.log(
      `I'll let you be on your way then ${user.name}. Stay safe. I hope you live for us to cross paths again.`
    );
    //return UI(user)
    const firstWeapon = new Weapon(user);
    user.weapon = firstWeapon;
  }
}

async function tutLVL(user) {
  console.log(
    "A small figure sits in the shadows near a campfire, sharpening her knives."
  );
  const answers = await inquirer.prompt(tutVL);
  if (answers.name === user.name) {
    return firstTime(user);
  } else {
    console.log(`Why lie? I see everything ${user.name}.`);
    return firstTime(user);
  }
}

export { tutLVL, firstTime };
