class Car {

    #score

    constructor(name) {
        this.name = name;
        this.#score = 0;

    }

    getScore() {
        return this.#score
    }

    go() {
        this.#score++;
    }

}

module.exports = Car