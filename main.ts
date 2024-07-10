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
})
