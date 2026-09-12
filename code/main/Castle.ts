///<reference path="Place.ts"/>

Saving.registerBool("castleKilledNougatMonster", false);

class Castle extends Place{
    // The render area
    private renderArea: RenderArea = new RenderArea();
    
    // Constructor
    constructor(game: Game){
        super(game);
        
        this.renderArea.resizeFromArray(Database.getAscii("places/castle/map"), 0, 5);
        this.update();
    }
    
    // getRenderArea()
    public getRenderArea(): RenderArea{
        return this.renderArea;
    }
    
    // Private methods   
    private drawBigRoom(x: number, y: number): void{
        // Buttons
        this.renderArea.addMultipleAsciiButtons("castleBigRoomButton", 
                                     x, x+1, y,
                                     x, x+1, y+1);
        
        // Comment
        this.renderArea.addFullComment(x - 9, y, Database.getText("castleBigRoomComment"), Database.getTranslatedText("castleBigRoomComment"), "castleBigRoomComment");
        
        // Interactions
        this.renderArea.addLinkOver(".castleBigRoomButton, .castleBigRoomComment", ".castleBigRoomComment");
        this.renderArea.addLinkCall(".castleBigRoomButton", new CallbackCollection(this.goToBigRoom.bind(this)));
    }
