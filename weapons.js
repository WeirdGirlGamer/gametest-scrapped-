//import { Player, Companion } from "./playerCompanion.js";
const weaponTypes = [
  "daggers",
  "knife",
  "pistol",
  "staff",
  "wand",
  "potion",
  "sword",
  "axe",
  "spear",
  "shield",
];
class Weapon {
  constructor(user) {
    this.durability = 100;
    this.type =
      weaponTypes[Math.floor(Math.random() * (weaponTypes.length - 1) + 1)];
    //this.level = Math.floor(Math.random() * 1 - user.level)
    this.#minimumThresh = Math.floor(
      Math.random() * 10 + (10 + user.level * 5)
    );
    this.#maxThresh = Math.floor(Math.random() * 15 + (10 + user.level * 5));
  }
  #minimumThresh; //for damage
  #maxThresh;
  broken = false;

  Break() {
    if (this.durability <= 0) {
      this.broken = true;
    }
  }

  unusable() {
    this.#minimumThresh = 0;
    this.#maxThresh = 0;
  }

  dmg() {
    if (!this.broken) {
      return Math.floor(
        Math.random() * (this.#maxThresh - this.#minimumThresh) +
          this.#minimumThresh
      );
    } else {
      return 0;
    }
  }

  get thisType() {
    return this.type;
  }
}

export { Weapon };
