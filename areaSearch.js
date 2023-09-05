//On calling the search area, generate a random event
//Give two options for the user

import inquirer from "inquirer";
import { Potion } from "../potions.js";
import { Weapon } from "../weapons.js";

//const situations = [sit1]
const sitFuncs = [rat];

const sit1 = [
  {
    type: "list",
    name: "sitSelection",
    message: "A rat scurries across the floor.",
    choices: ["Kill it", "Leave it"],
  },
];

const rat = async (user) => {
  const choice = await inquirer.prompt(sit1);
  choice = choice.toLowerCase();
  if (choice === "kill it") {
    let rand = Math.floor(Math.random() * 10 + 1);
    if (rand > 6) {
      rand = Math.floor(Math.random() * 10 + 1);
      if (rand > 5) {
        user.inventory.potionsInventory.push(new Potion());
      } else {
        user.inventory.weaponInventory.push(new Weapon());
      }
    } else {
      console.log("Well you killed a rat for nothing. How do you feel?");
    }
  } else {
  }
};

const areaSearch = (user) => {};
