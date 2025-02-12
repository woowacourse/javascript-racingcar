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

    isBiggerThanMaxPosition(maxPosition) {
        return this.#position <= maxPosition;
    }

    get position() {
        return this.#position
    };
}

export default Car;