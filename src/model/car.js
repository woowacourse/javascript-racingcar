export default class Car {
    constructor(name) {
        this.name = name;
        this.successCount = 0;
    }

    increaseSuccessCount(step) {
        this.successCount += step;
    }
}