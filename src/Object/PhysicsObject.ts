abstract class PhysicsObject extends GameObject{

    protected body : p2.Body = null;
    protected bodyShape : p2.Circle | p2.Box = null;
    protected static world : p2.World = null;

    constructor(){
        super();
    }

    addDestroyMethod(){
        CreateWorld.world.removeBody(this.body);
    }


}