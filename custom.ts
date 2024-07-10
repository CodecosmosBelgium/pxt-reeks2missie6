
player.execute("/scriptevent cc:getId " + mobs.queryTarget((mobs.target(MY_AGENT)))[0].uniqueId)

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="Zet klaar (level1)"
    //% block.loc.en="Setup (level1)"
    export function setup_level1() {
        agent.teleport(world(2451, -2, 57), 0)
    }

    //% block="Zet klaar (level2)"
    //% block.loc.en="Setup (level2)"
    export function setup_level2(){
        agent.teleport(world(2446, -2, 40), NORTH)
    }

}

/**
 * Your assistant in Minecraft to help you get things done.
 */

//% color=#D83B01 weight=64 icon="icons/Agent_icon_white.png"
namespace agent2 {

    //% block="Ga vooruit"
    export function move_forward(){
        agent.move(FORWARD, 1)
    }
}
