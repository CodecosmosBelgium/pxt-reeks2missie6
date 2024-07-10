
player.execute("/scriptevent cc:getId " + mobs.queryTarget((mobs.target(MY_AGENT)))[0].uniqueId)

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="Zet klaar (Intro)"
    //% block.loc.en="Setup (Intro)"
    export function setup_intro() {
        agent.teleport(world(2451, -2, 57), 0)
    }

}

/**
 * Your assistant in Minecraft to help you get things done.
 */
//% color=#D83B01 weight=64 icon="icons/Agent_icon_white.png"
//% groups='["other", "Actions", "Inventory"]'
namespace agent2 {

    //% block="Ga vooruit"
    export function move_forward(){
        agent.move(FORWARD, 1)
    }
}
