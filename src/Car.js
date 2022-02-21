import { FORWARD_CONDITION, MAX_OF_RANDOM_NUMBER, MIN_OF_RANDOM_NUMBER } from './constant/constant.js';
import { generateRandomInRange } from './util/util.js';

export default class Car {
    #name;
    #step;

    constructor(name) {
        this.#name = name;
        this.#step = 0;
    }

    get name() { return this.#name; }
    get step() { return this.#step; }

    playTurn() {
        const random = generateRandomInRange(MIN_OF_RANDOM_NUMBER, MAX_OF_RANDOM_NUMBER);
        if (random >= FORWARD_CONDITION) this.stepForward();
    }

    stepForward(stepCount = 1) {
        this.#step += stepCount;
    }

    resetStep() {
        this.#step = 0;
    }
}
