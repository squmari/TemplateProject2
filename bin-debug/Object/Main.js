var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ColorPallet;
(function (ColorPallet) {
    ColorPallet[ColorPallet["BULE"] = 4577789] = "BULE";
    ColorPallet[ColorPallet["WHITE"] = 16053492] = "WHITE";
    ColorPallet[ColorPallet["RED"] = 15607136] = "RED";
    ColorPallet[ColorPallet["BLACK"] = 530475] = "BLACK";
})(ColorPallet || (ColorPallet = {}));
var PIXEL_PER_METER = 1;
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    Main.prototype.addToStage = function () {
        Util.init(this);
        CheckDate.init();
        SaveData.init();
        GameObject.init(this.stage);
        PhysicsObject.prepare(PIXEL_PER_METER);
        Camera2D.initial();
        Game.init();
        egret.startTick(this.tickLoop, this);
    };
    Main.prototype.tickLoop = function (timeStamp) {
        GameObject.update();
        return false;
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var Game = (function () {
    function Game() {
    }
    Game.init = function () {
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
        GameOver.gameOverFlag = false;
        /* new メソッドを記入*/
        new GameStage();
        new UILayer();
        new Background();
        new Score(0, 0, 0, 0, ColorPallet.BLACK);
    };
    return Game;
}());
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Main.js.map