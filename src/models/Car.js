class Car{
    #name;
    #state;
    constructor(name) {
        this.#name = name;
        this.#state = 1;
    }

    move(){}
    getState(){}
}

module.exports = Car;