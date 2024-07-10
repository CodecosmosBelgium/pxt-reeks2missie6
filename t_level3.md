### @hideIteration true
### @flyoutOnly true
# level 2
```blocks
player.onChat("level3", function () {
    CodeCosmos.setup_level3()
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 2; index++) {
            agent2.move_forward()
        }
        agent.turn(LEFT_TURN)
        agent2.move_forward()
        agent.turn(RIGHT_TURN)
        for (let index = 0; index < 4; index++) {
            agent2.move_forward()
        }
        agent.turn(RIGHT_TURN)
        for (let index = 0; index < 3; index++) {
            agent2.move_forward()
        }
        agent.turn(LEFT_TURN)
    }
})

```

```template
player.onChat("level3", function () {
  CodeCosmos.setup_level3()
    
})


```

## Level 2

Use the learning platform to solve the exercise.
