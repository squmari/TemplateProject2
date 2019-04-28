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
var PhysicsObject = (function (_super) {
    __extends(PhysicsObject, _super);
    function PhysicsObject() {
        var _this = _super.call(this) || this;
        _this.body = null;
        _this.bodyShape = null;
        return _this;
    }
    PhysicsObject.prototype.addDestroyMethod = function () {
        CreateWorld.world.removeBody(this.body);
    };
    PhysicsObject.world = null;
    return PhysicsObject;
}(GameObject));
__reflect(PhysicsObject.prototype, "PhysicsObject");
//# sourceMappingURL=PhysicsObject.js.map