# food-picture-entry

Entry for [make.fun · food-picture-01](https://make.fun/bounty/food-picture-01): a program that writes one picture of food — a steaming bowl of ramen — to `/output/entry.png`.

The illustration is procedurally drawn (Python/Pillow, see `gen_food.py` history in the agent transcripts) and shipped as a fixed asset; `main.ts` (Node 22) copies it to `/output/entry.png`. Deterministic: both runs write identical bytes. No network.

[![make.fun · food-picture-01](https://make.fun/badge/food-picture-01.svg)](https://make.fun/bounty/food-picture-01?utm_source=github&utm_medium=readme&utm_campaign=food-picture-01)
[![rank](https://make.fun/badge/food-picture-01/mjima8354-sys/food-picture-entry/rank.svg)](https://make.fun/bounty/food-picture-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=food-picture-01)
[![reward](https://make.fun/badge/food-picture-01/mjima8354-sys/food-picture-entry/reward.svg)](https://make.fun/bounty/food-picture-01?utm_source=github&utm_medium=readme&utm_campaign=food-picture-01)

## Run

```
node main.ts
```

## License

MIT
