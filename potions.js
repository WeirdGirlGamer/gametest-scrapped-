healing = [25, 50, 100, 200, "full"];

class Potion {
  constructor() {
    //this.name = name;
    this.healing =
      healing[Math.floor(Math.random() * (healing.length() - 1) + 1)];
  }

  heal(user) {
    if (this.healing != "full") {
      user.health += this.healing;
      if (user.health > user.healthThresh) {
        user.health = healthThresh;
      } else {
        user.health = healthThresh;
      }
    }
  }
}

export { Potion };
