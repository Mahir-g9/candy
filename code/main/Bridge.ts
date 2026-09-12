///<reference path="Quest.ts"/>

class Bridge extends Quest{
    // Constructor
    constructor(game: Game){
        super(game);
        
        // Resize the quest
        this.resizeQuest(138, 32);
        
        // Add collision boxes around
        this.addPlayerCollisionBoxes(true, false, false, true);
        
        // Add the player
        this.getGame().getPlayer().loadCandyBoxCharacter(this);
        this.getGame().getPlayer().setGlobalPosition(new Pos(0, 17));
        this.configPlayerOrClone(this.getGame().getPlayer());
        this.addEntity(this.getGame().getPlayer());
        
        // Add a wall at the bridge position
        this.addBridgeFloor();
        
        // Add the troll
        this.addTroll();
        
        // Add the message
        this.getGame().getQuestLog().addMessage(new QuestLogMessage("You're trying to cross the bridge. A huge troll is blocking your way!"));
    }
    
    // Public methods
    public configPlayerOrClone(entity: QuestEntity): void{
        entity.setQuestEntityMovement(new QuestEntityMovement(new Pos(1, 0)));
        entity.getQuestEntityMovement().setGravity(true);
        entity.getQuestEntityMovement().setWormsLike(true);
    }

    public endQuest(win: boolean): void{
        // We add some messages
        if(win){
            this.getGame().getQuestLog().addMessage(new QuestLogMessage("You managed to cross the bridge!"));
            Saving.saveBool("mainMapDoneBridge", true); // The bridge is done
        }
        else{
            this.getGame().getQuestLog().addMessage(new QuestLogMessage("You didn't manage to cross the bridge."));
        }
        
        // We call the endQuest method of our mother class
        super.endQuest(win);
    }
