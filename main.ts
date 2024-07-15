player.onChat("level1", function () {
    CodeCosmos.setup_level1()
    for (let index = 0; index < 9; index++) {
        agent.turn(LEFT_TURN)
        agent2.move_forward()
        agent2.move_forward()
        agent2.move_forward()
        agent.turn(RIGHT_TURN)
    }
    for (let index = 0; index < 9; index++) {
        agent2.move_forward()
        agent.turn(RIGHT_TURN)
        agent2.move_forward()
        agent.turn(LEFT_TURN)
    }
    builder.teleportTo(positions.add(
    agent.getPosition(),
    pos(0, -2, 0)
    ))
    builder.place(WATER)
    agent.destroy(DOWN)
    agent.place(DOWN)
})
