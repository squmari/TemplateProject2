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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    Main.prototype.addToStage = function () {
        CheckDate.init();
        SaveData.init();
        GameObject.init(this.stage);
        Util.init(this);
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
var Background = (function (_super) {
    __extends(Background, _super);
    function Background() {
        var _this = _super.call(this, 0, 0, Game.width, Game.height) || this;
        _this.color = ColorPallet.WHITE;
        Background.I = _this;
        _this.shapes[0] = Util.setRect(0, 0, Game.width, Game.height, _this.color, 0, true);
        _this.compornent.addChild(_this.shapes[0]);
        return _this;
    }
    Background.prototype.updateContent = function () { };
    Background.I = null;
    return Background;
}(GameCompornent));
__reflect(Background.prototype, "Background");
var CreateWorld = (function (_super) {
    __extends(CreateWorld, _super);
    function CreateWorld() {
        var _this = _super.call(this) || this;
        CreateWorld.I = _this;
        CreateWorld.world.on("beginContact", _this.collision, _this);
        return _this;
    }
    CreateWorld.prototype.createWorld = function () {
        CreateWorld.world = new p2.World();
        CreateWorld.world.sleepMode = p2.World.BODY_SLEEPING;
        CreateWorld.world.gravity = [0, 9.8];
    };
    CreateWorld.worldBegin = function (dt) {
        CreateWorld.world.step(1 / 60, dt / 1000, 10);
        return false;
    };
    //コリジョンイベントはここにまとめる
    CreateWorld.prototype.collision = function (evt) {
    };
    CreateWorld.prototype.addDestroyMethod = function () { CreateWorld.world.clear(); };
    CreateWorld.prototype.updateContent = function () { };
    CreateWorld.I = null;
    return CreateWorld;
}(PhysicsObject));
__reflect(CreateWorld.prototype, "CreateWorld");
//# sourceMappingURL=Main.js.map