### @hideIteration true
### @flyoutOnly true
# level 1
```blocks
player.onChat("level1", function () {
    CodeCosmos.setup_intro()
    for (let index = 0; index < 9; index++) {
        agent2.move_forward()
        agent.turn(LEFT_TURN)
        agent2.move_forward()
        agent.turn(RIGHT_TURN)
    }
    for (let index = 0; index < 9; index++) {
        agent2.move_forward()
        agent.turn(RIGHT_TURN)
        agent2.move_forward()
        agent.turn(LEFT_TURN)
    }
})


```

```template
player.onChat("level1", function () {
    CodeCosmos.setup_intro()
    for (let index = 0; index < 9; index++) {
    }
    for (let index = 0; index < 9; index++) {
    }
})

```

## Level 1

Use the learning platform to solve the exercise.
