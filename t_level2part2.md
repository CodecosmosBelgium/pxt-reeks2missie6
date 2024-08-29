### @hideIteration true
### @flyoutOnly true
# Missie 6
```blocks
player.onChat("level2", function () {
    CodeCosmos.setup_mission2_part2()
    for (let index = 0; index < 14; index++) {
        if (CodeCosmos.is_block_under_agent(DEAD_FIRE_CORAL_BLOCK)) {
            CodeCosmos.place_coral(CoralTypes.Red)
        }
        if (CodeCosmos.is_block_under_agent(DEAD_HORN_CORAL_BLOCK)) {
            CodeCosmos.place_coral(CoralTypes.Yellow)
        }
        agent.move(FORWARD, 1)
    }
})
```

```template
player.onChat("level2", function () {
    CodeCosmos.setup_mission2_part2()
    for (let index = 0; index < 15; index++) {
    }
})
```

## Oefening 2
There is no exercise.
