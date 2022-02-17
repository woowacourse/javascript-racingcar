import { generateRandomInRange } from './util.js';
import { CAR_GO_FORWARD_RULE } from './constant.js';

export default class Car {
    constructor(name) {
        this.name = name;
        this.step = 0;
    }

    tryForward() {
        if (
            generateRandomInRange(CAR_GO_FORWARD_RULE.MIN, CAR_GO_FORWARD_RULE.MAX) >=
            CAR_GO_FORWARD_RULE.ENOUGH
        ) {
            this.forward();
        }
    }

    forward() {
        this.step += 1;
    }

    getSteps() {
        return this.step;
    }

    resetStep() {
        this.step = 0;
    }
}
