class Car {
    #name;
    #position;

    constructor(name) {
        this.#position = 0;
        this.#name = name;
    }

    decideGoAndStop(randomNumber) {
        if (randomNumber >= 4) this.#position++;
    }

    getPostion() {
        return this.#position;
    }

    getName() {
        return this.#name;
    }
}