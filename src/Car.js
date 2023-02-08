class Car {
    #name;
    #position;

    constructor() {
        this.#position = 0;
    }

    decideGoAndStop(randomNumber) {
        if (randomNumber >= 4) this.#position++;
    }

    inputName(name) {
        this.#name = name;
    }

    getPosition() {
        return this.#position;
    }

    getName() {
        return this.#name;
    }
}

module.exports = Car;