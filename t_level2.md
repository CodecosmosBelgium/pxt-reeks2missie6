### @hideIteration true
### @flyoutOnly true
# level 2
```blocks
player.onChat("level2", function () {
    agent.teleport(world(2446, -2, 40), NORTH)
    for (let index = 0; index < 2; index++) {
        agent.turn(RIGHT_TURN)
        for (let index = 0; index < 3; index++) {
            agent2.move_forward()
        }
        for (let index = 0; index < 2; index++) {
            agent.turn(LEFT_TURN)
            for (let index = 0; index < 3; index++) {
                agent2.move_forward()
            }
        }
        agent.turn(RIGHT_TURN)
        for (let index = 0; index < 2; index++) {
            agent2.move_forward()
        }
    }
})

```

```template
player.onChat("level2", function () {
    agent.teleport(world(2446, -2, 40), NORTH);
    
})


```

## Level 2

Use the learning platform to solve the exercise.
