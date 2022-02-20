import { generateRandomInRange } from './util.js';
import { TRIAL_BOUNDARIES, FORWARD_MINIMUM } from './constant.js';

export default class Car {
    constructor(name) {
        this.name = name;
        this.step = 0;
    }

    tryForward() {
        if (generateRandomInRange(TRIAL_BOUNDARIES.MIN, TRIAL_BOUNDARIES.MAX) >= FORWARD_MINIMUM) {
            this.forward();
            return true;
        }

        return false;
    }

    forward() {
        this.step += 1;
    }

    resetStep() {
        this.step = 0;
    }
}
