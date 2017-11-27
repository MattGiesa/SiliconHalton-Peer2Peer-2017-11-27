/*
    interfaces
*/
interface IMove {
    move(): void;
}

interface IGenerateMovement {
    generateMovement(): number;
}

/*
    abstract classes
*/
abstract class Engine implements IGenerateMovement {
    private distancePerTick: number;

    constructor(distancePerTick: number) {
        this.distancePerTick = distancePerTick;
    }

    generateMovement(): number {
        return this.distancePerTick;
    }
}

abstract class Vehicle implements IMove {
    private engine: Engine;
    private distanceMoved: number = 0;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    move(): void {
        this.distanceMoved += this.engine.generateMovement();
    }
}

/*
    class
*/
class CarEngine extends Engine {
    constructor() {
        super(20);
    }
}

class Car extends Vehicle {
    constructor() {
        super(new CarEngine());
    }
}

/*
    do stuff
*/
let car = new Car();
car.move();