const Random = require("./Random");
const random = require("./Random");

class Racing {

    constructor(car) {
        this.car = car;
    }

    checkRandomNumberOverFour() {
        const randomNumber = Random.getRandomNumber()
        return randomNumber >= 4
    }

    raceEachCar() {
        this.checkRandomNumberOverFour() && this.car.go()
    }

}

module.exports = Racing