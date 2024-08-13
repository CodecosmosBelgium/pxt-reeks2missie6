### @hideIteration true
### @flyoutOnly true
# Missie 6
```blocks
### @hideIteration true
### @flyoutOnly true
# Missie 6
```blocks
player.onChat("level2", function () {
    Codecosmos.setup_mission3_part2();
    while (!(CodeCosmos.is_block_under_agent(GOLD_BLOCK))) {
        if (CodeCosmos.is_block_under_agent(TNT)) {
            agent.turn(RIGHT_TURN)
        }
        if (CodeCosmos.is_block_under_agent(CRAFTING_TABLE)) {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, -1)
    }
})
```

```template
player.onChat("level2", function () {
    Codecosmos.setup_mission3_part2();
    while (!(CodeCosmos.is_block_under_agent(GOLD_BLOCK))) {
        if (CodeCosmos.is_block_under_agent(TNT)) {
            agent.turn(RIGHT_TURN)
        }
        if (CodeCosmos.is_block_under_agent(CRAFTING_TABLE)) {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, -1)
    }
})
```

## Oefening 2
There is no exercise.
