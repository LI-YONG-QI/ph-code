# Phase2

在這個階段當中，我們主要需要針對之前的程式碼做優化，我們需要多建立一個 class game，用來表示**遊戲整體**，以及更動 Level 中怪物的表示方式

在 phase1 當中，我們讓 Level 擔任的是類似遊戲整體的角色，在裡面放入玩家 player 以及讓他們在裡面跟怪物戰鬥（fight），接下來我們需要再對每個 class **做的事情**做更詳細的劃分

1. 在 phase2 當中，我們讓 Game 來負責管理整體遊戲的運行，並且將 Player 跟 Level 分離出來

2. 改寫 constructor，改寫為更簡單的方式，讓程式碼看起來更簡潔

```ts
//原先的 constructor
class Char {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

//改寫後
class Char {
  constructor(public name: string) {}
}
```

# Class

## Game

Method :

- `fight(player: Player, level: Level): boolean ` 將原本的 Level 當中的 `fight` 移到此處，功能部分除了跟之前一樣的部分以外（玩家先攻），這次需要分出勝負才能離開 function，也就是怪物跟玩家有一方死亡
  - 若玩家死亡（life < 0）return false，反之 return true

## Character

- 新增一個 `name` public property 在 constructor 當中
- 把屬於 property 改動全部都放進 method 中，讓外部避免使用 `.` 來修改，存取部分還是直接使用 `.` 即可
  - `setLife(newLife: number)` 設定 `life`

## Level

- 移除 `fight` method
- 移除 `player` property
  - 因為 Level 當中已經沒有 `player` 的 property 了，因此 `fight` (in Game) 需要多放入一個 player 當作參數
- 新增 method
  - `setIsPass(status: boolean)` 設定 `isPass`

# Main

分為兩個測試 function `test` 跟 `test2`

## Test 測資設定

- player
  - 名字 = Jack
  - 血量 = 10
  - 攻擊力 = 5
- level
  - 創建 id 為 1
  - monster
    - 名字 = evil
    - 血量 = 7
    - 攻擊力 = 3

## Test2 測資設定

- player
  - 名字 = Jack
  - 血量 = 10
  - 攻擊力 = 1
- level
  - id = 1
  - monster
    - 名字 = evil
    - 血量 = 7
    - 攻擊力 = 8

```ts
function createGame(): Game {
  //創建遊戲
}

function createPlayer(name: string, life: number, power: number): Player {
  //創建角色
}

function createLevel(
  id: number,
  monsterName: string,
  monsterLife: number,
  monsterPower: number
): Level {
  //創建 Level
}

function test() {
  const game = createGame(需放入對應參數);
  const player = createPlayer(需放入對應參數);
  const level = createLevel(需放入對應參數);

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
  const game = createGame(需放入對應參數);
  const player = createPlayer(需放入對應參數);
  const level = createLevel(需放入對應參數);

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
```
