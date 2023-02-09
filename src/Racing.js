const random = require("./Random");

class Racing {

    constructor(car) {
        this.car = car;
    }

    checkRandomNumberOverFour() {
        const randomNumber = random()
        return randomNumber >= 4
    }

    raceEachCar() {
        this.checkRandomNumberOverFour() && this.car.go()
    }

}

module.exports = Racing