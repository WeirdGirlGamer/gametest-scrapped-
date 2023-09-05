//main plan is to
//step 1: Spawn an enemy
//  -randomize an enemy object
//    - finish the enemy object if its not done already - cba to check while writing this
//  -print the enemy's armor and health
//  -then print the users UI
//Step 2: Implement the attack function for the user and the enemy
//  -Give user the chance to attack first - heal from a previous battle possibly
//  -Then let the enemy attack
//    -later down the line try to implement lasting effects - burning, bleeding, poison, etc
//Step 3: Loop the above interaction
//Step 4: End the loop when either the user or the enemy hp reaches 0
//  -Game over if user
//  -Next floor if winner
//  -add exp when the enemy is defeated
//Step 5: If won, give the user an extra turn to search the area, heal, armor up, etc
//Step 6: Move the user to the next floor
//  -randomize 3 floors for the user to pick from
//Repeat these steps until the user quits or loses
import { UI, afterUI } from "../menus.js";
import { Enemy } from "../allUnplayables/enemies.js";
import { Player, createConfig, mage } from "../player.js";
import { Weapon } from "../weapons.js";

const floorSpawn = async (user) => {
  const enemy = new Enemy(user);
  console.log(`${enemy.name} approaches...`);
  while (enemy.health >= 0 && !user.health >= 0) {
    console.log(`${enemy.name} health: ${enemy.health}\nType: ${enemy.type}`);
    console.log(`${user.name} health: ${user.health} Armor: ${user.armor}`);
    await UI(user, enemy);
    // console.log(enemy.dmgThreshT);
    // console.log(enemy.dmgThreshB);
    if (enemy.health <= 0) {
      console.log(`\nYou have defeated the ${enemy.name}`);
      console.log(`\n${user.name} health: ${user.health} Armor: ${user.armor}`);
      console.log(`What would you like to do next?`);
      break;
    }
    enemy.attack(user, enemy);
  }
  if (user.health <= 0) {
    console.log("Game Over");
  } else {
    user.floor++;
    user.exp += Math.floor(Math.random() * 50 + 25);
    user.tryLevelup();
    await afterUI(user);
  }
};

//const user = new Player("Taylor", createConfig(mage));
// let _weapon = new Weapon("test", user);
// _weapon.type = "staff";
// user.weapon = _weapon;
// user.floorNum = 2;
// floorSpawn(user);

export { floorSpawn };
