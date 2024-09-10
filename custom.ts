
player.execute("/scriptevent cc:getId " + mobs.queryTarget((mobs.target(MY_AGENT)))[0].uniqueId)

enum CoralTypes {
    //% block="Red Coral"
    //% block.loc.nl="Rood Koraal"
    Red,
    //% block="Yellow Coral"
    //% block.loc.nl="Geel Kooraal"
    Yellow
}

enum LookDirection{
    //% block="Above"
    //% block.loc.nl="boven"
    Above,

    //% block="Under"
    //% block.loc.nl="Onder"
    Below,

    //% block="Voor"
    // InFront
}

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="Setup (Level 1)"
    export function setup_level1() {
        agent.teleport(world(2451, -2, 57), 0)
    }

    //% block="Zet klaar"
    //% block.loc.en="Setup"
    export function setup_level2(){
        agent.teleport(world(2446, -2, 40), EAST)
    }

    //% block="Zet klaar"
    //% block.loc.en="Setup"
    export function setup_level3() {
        agent.teleport(world(2447, -2, 30), NORTH)
    }




    // Level 2
    
    //Slot 0: red Coral
    //Slot 1: Blue Coral

    //% block="place $color below agent"
    //% block.loc.nl="plaats $color onder de agent"
    export function place_coral(color?: CoralTypes) {
        // if(color == CoralTypes.Red){
        //     agent.setSlot(0);
        // }
        // if (color == CoralTypes.Blue) {
        //     agent.setSlot(1);
        // }
        // agent.destroy(DOWN)
        builder.teleportTo(positions.add(
            agent.getPosition(),
            pos(0, -2, 0)
        ))
        builder.place(WATER)
        builder.move(SixDirection.Up, 1);
        if(color == CoralTypes.Red){
            builder.place(FIRE_CORAL_BLOCK)
        }
        if (color == CoralTypes.Yellow) {
            builder.place(HORN_CORAL_BLOCK)
        }
        
        // agent.place(DOWN)
    }

    //% block="is $block $direction agent"
    //% block.shadow=minecraftBlock
    //% block.loc.nl="is $block $direction agent"
    export function is_block_direction_agent(block: number, direction: LookDirection){
        let pos;
        switch(direction){
            case LookDirection.Above:
                pos = (0, 1, 0)
                break;
            case LookDirection.Below:
                pos = (0, -1, 0)
                break;
        }
    }
    
    //% block="is block %block=block under the agent"
    //% block.loc.nl="is blok %block=block onder de agent"
    //% block.shadow=minecraftBlock
    export function is_block_under_agent(block: number): boolean {
        let block_under_agent = agent.getPosition().add(world(0,-1,0))
        return blocks.testForBlock(block, block_under_agent)
    }


    //% block="Zet klaar"
    //% block.loc.en="Setup"
    export function setup_mission2_part1() {
        blocks.place(REDSTONE_BLOCK, world(2456, -1, 4))
        loops.pause(500)
        agent.teleport(world(2455, -1, 11), EAST)
    }

    //% block="Zet klaar"
    //% block.loc.en="Setup"
    export function setup_mission2_part2() {
        blocks.place(REDSTONE_BLOCK, world(2457, -1, 4))
        loops.pause(500)
        agent.teleport(world(2467, -1, 11), EAST)
    }


    //% block="Zet klaar"
    //% block.loc.en="Setup"
    export function setup_mission3_part1() {
        agent.teleport(world(2488, -2, 7), SOUTH)
    }

    //% block="Zet klaar"
    //% block.loc.en="Setup"
    export function setup_mission3_part2() {
        agent.teleport(world(2492, -2, 26), SOUTH)
    }

    //% block="Zet klaar"
    //% block.loc.en="Setup"
    export function setup_mission3_part3() {
        agent.teleport(world(2487, -2, 36), EAST)
    }


}

/**
 * Your assistant in Minecraft to help you get things done.
 */

//% color=#D83B01 weight=64 icon="icons/Agent_icon_white.png"
namespace agent2 {

    //% block="Go Forward"
    //% block.loc.nl="Ga Vooruit"
    export function move_forward(){
        agent.move(FORWARD, 1);
    }
    
    //% block="Turn"
    //% block.loc.nl="Draai"
    export function turn_around() {
        agent.turn(LEFT)
        agent.turn(LEFT)
    }
}
