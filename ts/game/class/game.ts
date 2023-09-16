import { Player, Monster } from "./character";
import { Level } from "./level";

class Game {
  public fight(player: Player, level: Level): boolean {
    while (true) {
      level.monster.life -= player.power;
      if (level.monster.life <= 0) {
          level.setIsPass(true);
          return true;
      }
      player.life -= level.monster.power;
      if (player.life <= 0) {
        return false;
      }
    }
  }
}
export { Game };
