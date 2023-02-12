const Constants = require("./Constants");

class Racing {

    constructor(car) {
        this.car = car;
    }

    checkRandomNumber(randomNumber) {
        return randomNumber >= Constants.GO_POINT;
    }

    raceEachCar(randomNumber) {
        this.checkRandomNumber(randomNumber) && this.car.go();
    }

}

module.exports = Racing;