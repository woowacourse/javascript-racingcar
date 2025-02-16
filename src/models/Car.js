class Car {
    #name;
    #position;

    constructor(name) {
        this.#name = name;
        this.#position = 0;
    }

    move() {
        const FOWARD = 1;
        this.#position += FOWARD;
    }

    comparePosition(otherPosition) {
        return Math.max(this.#position, otherPosition);
    }

    get position() {
        return this.#position;
    };

    get name(){
        return this.#name;
    }
}

export default Car;