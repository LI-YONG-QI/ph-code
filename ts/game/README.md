## 需求
這是地下城冒險的第一階段，你需要先建立四個 class 分別是：
- Level
- Character
	- Player
	- Monster
## Character 
Character 是角色的基底 class，所有角色類型必須繼承此 class

Property：
1. `life` 生命值
2. `power` 攻擊力

## Player
繼承至 Character，代表玩家

## Monster
繼承至 Character，代表怪物

## Level
代表關卡

Property：
1. `id` 代表現在第幾關
2. `monster` 代表現在在 Level 裡的怪物（Monster）
3. `player` 現在遊玩的玩家（Player）是誰
4. `isPass` 代表是否通關，預設需為 false

Method：

- `fight(p: Player, m: Monster)` 讓關卡內的玩家跟怪物互相戰鬥
	- 由玩家先攻
	- 怪物的血量 - 玩家的攻擊力 -> 玩家的血量 - 怪物的攻擊力
		- 如果在玩家先攻的情況下直接將怪物殺死
		- 那麼就強制跳出 function 
	- 根據戰鬥的結果，如果怪物血量歸 0，那就視為通關，`isPass` 需更改為 true

# Main
```ts
function createLevel(id: number): Level{

}


function main(){
	const level1 = createLevel(1);
}

main()
```