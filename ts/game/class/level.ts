import { Monster } from "./character";
class Level {
  isPass: boolean = false;
  public setIsPass(status: boolean) {
    this.isPass = status;
  }
  constructor(public id: number, public monster: Monster) {}
}

export { Level };
