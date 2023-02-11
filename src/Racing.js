class Racing {

    constructor(car) {
        this.car = car;
    }

    checkRandomNumber(randomNumber) {
        return randomNumber >= 4
    }

    raceEachCar(randomNumber) {
        this.checkRandomNumber(randomNumber) && this.car.go()
    }

}

module.exports = Racing