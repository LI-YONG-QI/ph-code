import { Monster, Player } from "./character";
class Level {
  id: number;
  monster: Monster;
  player: Player;
  isPass: boolean = false;
  public fight() {
    this.monster.life -= this.player.power;
    if (this.monster.life <= 0) {
      this.isPass = true;
      return;
    }
    this.player.life -= this.monster.power;
  }
  constructor(id: number, monster: Monster, player: Player) {
    this.id = id;
    this.monster = monster;
    this.player = player;
  }
}

export { Level };
