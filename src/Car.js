class Car {
    #score
    #name

    constructor(name) {
        this.#name = name;
        this.#score = 0;

    }

    go() {
        this.#score++;
    }

    exportNameScore() {
        return [this.#name, this.#score];
    }

}

module.exports = Car