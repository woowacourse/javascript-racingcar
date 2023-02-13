class Car {
    #score;

    constructor(name) {
        this.name = name;
        this.#score = 0;
    }

    getCarName() {
        return this.name;
    }

    getScore() {
        return this.#score;
    }

    go() {
        this.#score++;
    }
}

module.exports = Car;