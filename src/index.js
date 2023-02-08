const Car = require("./Car");
const inputView = require("./InputView");
const OutputView = require("./OutputView");


class Racing {
    constructor() {
        this.cars = []
    }

    play() {
        inputView.inputCarName((input) => {
            const carNames = input.split(",");

            this.createCars(carNames)

        })
    }

    createCars(names) {
        names.forEach( carName => {
            this.cars.push(new Car(carName))
        });
    }




    
}

module.exports = Racing

const racing = new Racing()
racing.play()