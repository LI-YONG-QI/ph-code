import { Player, Monster, Level, Game } from "./class";

function createGame(): Game {
  //創建遊戲
  var g = new Game();
  return g;
}

function createPlayer(name: string, life: number, power: number): Player {
  //創建角色
  var p = new Player(life, power, name);
  return p;
}

function createLevel(
  id: number,
  monsterName: string,
  monsterLife: number,
  monsterPower: number
): Level {
  //創建 Level
  var m = new Monster(monsterLife, monsterPower, monsterName);
  var l = new Level(id, m);
  return l;
}

function test() {
  const game = createGame();
  const player = createPlayer("Jack",10,5);
  const level = createLevel(1,"evil",7,3);

  console.log(`Before Fight ...`);
  console.log(
    `Player name: ${player.name}, life: ${player.life}, power: ${player.power}`
  ); // Jack, 10, 5
  console.log(`Level is pass? -> ${level.isPass}`); // false

  const isSuccess = game.fight(player, level);
  console.log("After fight ...");
  console.log(`Fight result is ${isSuccess}`); // true
  console.log(`Player life is ${player.life}`); // 7
  console.log(`Level is pass? -> ${level.isPass}`); // true
}

function test2() {
  const game = createGame();
  const player = createPlayer("Jack",10,1);
  const level = createLevel(1,"evil",7,8);

  console.log(`Before Fight ...`);
  console.log(
    `Player name: ${player.name}, life: ${player.life}, power: ${player.power}`
  ); // Jack, 10, 1
  console.log(`Level is pass? -> ${level.isPass}`); // false

  const isSuccess = game.fight(player, level);
  console.log("After fight ...");
  console.log(`Fight result is ${isSuccess}`); // false
  console.log(`Player life is ${player.life}`); // -6
  console.log(`Level is pass? -> ${level.isPass}`); // false
}

test();
console.log("====================================");
test2();
