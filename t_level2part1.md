### @hideIteration true
### @flyoutOnly true
# Missie 6
```blocks
player.onChat("level1", function () {
    CodeCosmos.setup_mission2_part1()
    for (let index = 0; index < 10; index++) {
        if (CodeCosmos.is_block_under_agent(DEAD_FIRE_CORAL_BLOCK)) {
            CodeCosmos.place_coral(CoralTypes.Red)
        }
        agent.move(FORWARD, 1)
    }
})
```

```template
player.onChat("level1", function () {
    CodeCosmos.setup_mission2_part1()
    for (let index = 0; index < 10; index++) {
    }
})
```

## Oefening 1
There is no exercise.
