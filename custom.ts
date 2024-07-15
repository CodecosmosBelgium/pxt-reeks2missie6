
player.execute("/scriptevent cc:getId " + mobs.queryTarget((mobs.target(MY_AGENT)))[0].uniqueId)

enum CoralTypes {
    //% block="Red Coral"
    Red,
    //% block="Blue Coral"
    Blue
}

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

    //% block="Zet klaar (level3)"
    //% block.loc.en="Setup (level3)"
    export function setup_level3() {
        agent.teleport(world(2447, -2, 30), NORTH)
    }




    // Level 2
    
    //Slot 0: red Coral
    //Slot 1: Blue Coral

    //% block="place $color below agent"
    export function place_coral(color?: CoralTypes) {
        if(color == CoralTypes.Red){
            agent.setSlot(0);
        }
        if (color == CoralTypes.Blue) {
            agent.setSlot(1);
        }
        builder.teleportTo(positions.add(
            agent.getPosition(),
            pos(0, -2, 0)
        ))
        builder.place(WATER)
        agent.destroy(DOWN)
        agent.place(DOWN)
    }

    //% block="Zet klaar (missie 2, level 1)"
    export function setup_part2_level1(){
        agent.teleport(world(2445, -1, 11), EAST);
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
