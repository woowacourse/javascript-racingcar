const { RANDOM } = require("../utils/Constant");

class Car {
    #name;
    #position;

    constructor() {
        this.#position = 0;
    }

    decideGoAndStop(randomNumber) {
        if (randomNumber >= RANDOM.OVER_LIMIT) this.#position++;
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