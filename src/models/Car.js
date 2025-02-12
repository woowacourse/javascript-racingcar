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

    get position() {
        return this.#position;
    };

    get name(){
        return this.#name;
    }
}

export default Car;