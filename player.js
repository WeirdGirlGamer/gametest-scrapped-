import inquirer from "inquirer";
import { UI } from "./menus.js";

const shared = {
  exp: 0,
  level: 0,
  expThresh: 200,
  floorNum: 0,
  inventory: { potionsInventory: [], weaponInventory: [] },
};
const createConfig = (override) => {
  return { ...shared, ...override };
};

const rogue = {
  health: 150,
  healthThresh: 150,
  armor: 50,
  weaponType: ["daggers", "knife", "pistol"],
};

const mage = {
  health: 200,
  healthThresh: 200,
  armor: 75,
  weaponTypes: ["staff", "wand", "potion"],
};

const warrior = {
  health: 300,
  healthThresh: 300,
  armor: 100,
  weaponTypes: ["sword", "axe", "spear", "shield"],
};

class Player {
  constructor(name, config) {
    this.name = name;
    this.weapon = "Fists";
    for (const key in config) {
      this[key] = config[key];
    }
  }

  tryLevelup() {
    if (this.exp >= this.threshold) {
      // if exp is high enough to level up
      //account for any overflow exp and apply it to the new exp bar
      //level increase by one
      //level threshold increase
      //increase health threshold
      //refill health bar
      this.exp = this.exp - this.expThresh;
      this.level++;
      this.healthThresh += 150;
      this.healthThresh += 25;
      this.health = this.healthThresh;
    }
  }

  checkWT(item) {
    if (!this.weaponTypes.includes(item)) {
      //if this weapon is not the type your character uses set damage to 0
      item.unusable();
    }
  }

  takeDmg(dmg, enemy) {
    this.armor -= dmg;
    if (this.armor < 0) {
      this.health -= Math.abs(this.armor);
      this.armor = 0;
    }
    console.log(`${enemy.name} dealt ${dmg} damage!\n`);
  }

  equipWeapon(weapon) {
    this.weapon = weapon;
  }

  attack(enemy) {
    enemy.takeDmg(this.weapon.dmg());
  }

  displayWeapons(user) {
    const temp = [
      {
        type: "list",
        message: " ",
        choices: [...this.inventory.weaponInventory, "Go Back"],
        name: "pickedWeapon",
      },
    ];
    async function pickWeapon() {
      const answers = await inquirer.prompt(temp);
      const _picked = answers.pickedWeapon;
      if (_picked != "Go Back") {
        equipWeapon(_picked);
      } else {
        UI(user);
      }
    }
    pickWeapon();
  }

  displayPotions() {
    const temp = {
      type: "list",
      message: " ",
      choices: [...this.inventory.potionsInventory, "Go Back"],
      name: "pickedPotion",
    };
    async function pickPotion() {
      const answers = await inquirer.prompt(temp);
      const _picked = answers.pickedPotion;
      if (_picked != "Go Back") {
        _picked(user);
      } else {
        UI(user);
      }
    }
    pickPotion();
  }
}

// const mario = new Player("mario", createConfig(mage));
//console.log({ mario });

//console.log(mario.name);

/*const Sphexi = new Player("Sphexi", createConfig(mage));
Sphexi.health = 40;
Sphexi.armor = 15;
console.log(`Health: ${Sphexi.health} Armor: ${Sphexi.armor}`);
Sphexi.takeDmg(50);
console.log(`Health: ${Sphexi.health} Armor: ${Sphexi.armor}`); */

export { Player, warrior, mage, rogue, shared, createConfig };
