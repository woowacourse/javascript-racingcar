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
}

export default Car;