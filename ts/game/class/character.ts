class Character {
  life: number;
  power: number;
  constructor(life: number, power: number) {
    this.life = life;
    this.power = power;
  }
}
class Player extends Character {
  constructor(life: number, power: number) {
    super(life, power);
  }
}
class Monster extends Character {
  constructor(life: number, power: number) {
    super(life, power);
  }
}

export { Player, Monster}
