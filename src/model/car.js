export default class Car {
    constructor(name) {
        this.name = name;
        this.successCount = 0;
        this.isCurrentTurnSuccess = false;
    }

    increaseSuccessCount(step) {
        this.successCount += step;
    }

    updateIsCurrentTurnSuccess(isSuccess = false) {
        this.isCurrentTurnSuccess = isSuccess;
    }
}
