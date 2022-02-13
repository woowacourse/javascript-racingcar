import { FORWARD_CONDITION, MAX_OF_RANDOM_NUMBER, MIN_OF_RANDOM_NUMBER } from './constants/constant.js';
import { generateRandomInRange } from './utils/util.js';

export default class Car {
    constructor(name) {
        this.name = name;
        this.step = 0;
    }

    tryForward() {
        const random = generateRandomInRange(MIN_OF_RANDOM_NUMBER, MAX_OF_RANDOM_NUMBER);
        if (random >= FORWARD_CONDITION) this.forward();
    }

    forward() {
        this.step += 1;
    }

    resetStep() {
        this.step = 0;
    }
}
