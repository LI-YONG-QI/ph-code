class Character {
  public setLife(newLife: number) {
    this.life = newLife;
  }
  constructor(public life: number, public power: number, public name: string) {}
}
class Player extends Character {
  constructor(life: number, power: number, name: string) {
    super(life, power, name);
  }
}
class Monster extends Character {
  constructor(life: number, power: number, name: string) {
    super(life, power, name);
  }
}

export { Player, Monster };
