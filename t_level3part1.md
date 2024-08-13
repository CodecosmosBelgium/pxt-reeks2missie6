### @hideIteration true
### @flyoutOnly true
# Missie 6
```blocks
### @hideIteration true
### @flyoutOnly true
# Missie 6
```blocks
player.onChat("runWrong", function () {
    Codecosmos.setup_mission3_part1();
    agent.move(FORWARD, 3)
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 4)
        agent.turn(LEFT_TURN)
    }
    agent.turn(RIGHT_TURN)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 7)
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 3)
        agent.turn(LEFT_TURN)
    }
})
```

```template
player.onChat("level1", function () {
    Codecosmos.setup_mission3_part1();
    agent.move(FORWARD, 3)
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 4)
        agent.turn(LEFT_TURN)
    }
    agent.turn(RIGHT_TURN)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 7)
    agent.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 3)
        agent.turn(LEFT_TURN)
    }
})
```

## Oefening 1
There is no exercise.
