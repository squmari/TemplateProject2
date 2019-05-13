enum ColorPallet{
    BULE = 0x45d9fd,
    WHITE = 0xf4f4f4,
    RED = 0xee2560,
    BLACK = 0x08182b,
}

const PIXEL_PER_METER = 1;

class Main extends eui.UILayer {

    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
    }
 
    private addToStage() {
        Util.init( this );
        CheckDate.init();
        SaveData.init();
        GameObject.init( this.stage );
        PhysicsObject.prepare( PIXEL_PER_METER );
        Camera2D.initial();
        Game.init();
        egret.startTick(this.tickLoop, this);
    }

    tickLoop(timeStamp:number):boolean{
        GameObject.update();
        return false;
    }

}

class Game{

    static height: number;
    static width: number;

    static init() {
        
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width  = egret.MainContext.instance.stage.stageWidth;

        GameOver.gameOverFlag = false;


        /* new メソッドを記入*/
        new GameStage();
        new UILayer();
        new Background();
        new Score(0,0,0,0, ColorPallet.BLACK);
        
    }


}
