### @hideIteration true
### @flyoutOnly true
# Missie 6
```blocks
### @hideIteration true
### @flyoutOnly true
# Missie 6
```blocks
player.onChat("run3wrong", function () {
    CodeCosmos.setup_mission3_part3();
    while (!(CodeCosmos.is_block_under_agent(GRASS))) {
        if (CodeCosmos.is_block_under_agent(DIRT)) {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 3)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 5)
        agent.turn(LEFT_TURN)
    }
    agent2.turn_around()
    agent.move(FORWARD, 4)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 3)
})
```

```template
player.onChat("level3", function () {
    CodeCosmos.setup_mission3_part3();
    while (!(CodeCosmos.is_block_under_agent(GRASS))) {
        if (CodeCosmos.is_block_under_agent(DIRT)) {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 3)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 5)
        agent.turn(LEFT_TURN)
    }
    agent2.turn_around()
    agent.move(FORWARD, 4)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 3)
})
```

## Oefening 
There is no exercise.
