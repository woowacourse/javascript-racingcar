class Car {
    #score;
    #name;

    constructor(name) {
        this.#name = name;
        this.#score = 0;
    }

    move() {
        this.#score++;
    }

    exportNameScore() {
        return [this.#name, this.#score];
    }
}

module.exports = Car;
