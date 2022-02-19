import { FORWARD_CONDITION, MAX_OF_RANDOM_NUMBER, MIN_OF_RANDOM_NUMBER } from './constant/constant.js';
import { generateRandomInRange } from './util/util.js';

export default class Car {
    constructor(name) {
        this.name = name;
        this.step = 0;
    }

    playTurn() {
        const random = generateRandomInRange(MIN_OF_RANDOM_NUMBER, MAX_OF_RANDOM_NUMBER);
        if (random >= FORWARD_CONDITION) this.stepForward();
    }

    stepForward() {
        this.step += 1;
    }

    resetStep() {
        this.step = 0;
    }
}
