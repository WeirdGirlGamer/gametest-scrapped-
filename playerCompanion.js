import { Weapon } from "./weapons.js";
/* class Player {

    constructor(name, type){
        this.name = name
        this.#type = type
    }

    #inventory = [];
    #weaponInv = []
    floorNum = 0;
    level = 0
    #exp = 0
    #threshold = 200;
    name;
    #type;
    #weapontype;
    //#health = 100;
    #healthThresh
    //#armor = 0;

   
    
    get inventory() {
        return this.#inventory
    }
    set inventory(item) {
        this.#inventory.push(item);
    }
    
    get weaponInv(){
        return this.#weaponInv
    }
    set weaponInv(weapon){
       this.#weaponInv.push(weapon) 
    }

    get charType(){
        return this.#type;
    }

    takeDmg(dmg){
        this.#armor - dmg
        if(this.#armor < 0){
            this.health - Math.abs(this.#armor)
            this.#armor = 0
        }
    }

    attack(){

    }

    /*tryLevelup() {
        if(this.#exp >= this.#threshold){
            // if exp is high enough to level up 
            //account for any overflow exp and apply it to the new exp bar
            //level increase by one 
            //level threshold increase
            //increase health threshold
            //refill health bar
            this.#exp = this.#exp - this.#threshold
            this.level ++
            this.#threshold += 150
            this.#healthThresh += 25
            this.#health = this.#healthThresh
        }
    } 

    //attempt to make 3 classes that extend this class for each type
}
class Warrior extends Player {
    #weaponType = ['sword', 'axe', 'spear', 'shield']
    health = 300
    #healthThresh = 300
    armor = 100

    checkWT(item) {
        if(!this.#weaponType.includes(item)){ //if this weapon is not the type your character uses set damage to 0 
            item.unusable()
        }
    }

    tryLevelup() {
        if(super.this.#exp >= super.this.#threshold){
            // if exp is high enough to level up 
            //account for any overflow exp and apply it to the new exp bar
            //level increase by one 
            //level threshold increase
            //increase health threshold
            //refill health bar
            this.#exp = this.#exp - this.#threshold
            this.level ++
            this.#threshold += 150
            this.#healthThresh += 25
            this.#health = this.#healthThresh
        }
    }

}

class Rogue extends Player {
    #weaponType = ['daggers', 'knife', 'pistol']
    health = 150
    #healthThresh = 150
    armor = 50

    checkWT(item) {
        if(!this.#weaponType.includes(item)){ //if this weapon is not the type your character uses set damage to 0 
            item.unusable()
        }
    }

}

class Mage extends Player {
    #weaponType = ['staff', 'wand', 'potion']
    health = 200
    #healthThresh = 200
    armor = 75

    checkWT(item) {
        if(!this.#weaponType.includes(item)){ //if this weapon is not the type your character uses set damage to 0 
            item.unusable()
        }
    }

} */

class Companion {
  constructor(name, type, level) {
    this.compName(name);
    this.compType(type);
    this.lvl(level);
  }

  #inventory = [];
  #threshold = 200 + (this.level - 1) * 150;
  #exp = 0;
  #name;
  #type;
  #level;

  get inventory() {
    return this.#inventory;
  }
  set inventory(item) {
    this.#inventory.push(item);
  }

  get compType() {
    return this.#type;
  }
  set compType(Type) {
    this.#type = Type;
  }

  set compName(Name) {
    this.#name = Name;
  }

  get lvl() {
    return this.#level;
  }
  set lvl(num) {
    this.#level = num;
  }

  levelup() {
    if (this.#exp >= this.#threshold) {
      this.#exp = this.#exp = this.#threshold;
      this.level++;
      this.#threshold += 150;
    }
  }
}

export { Companion };
