const Car = require("./Car");
const inputView = require("./InputView");
const OutputView = require("./OutputView");
const random = require("./Random");


class Racing {
    constructor() {
        this.cars = []
    }

    play() {
        OutputView.askCarName();
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

    checkRandomNum() {
        const randomNum = random();
        return (randomNum >= 4)
    }

    goStop() {
        this.cars.forEach( car => {
            if (this.checkRandomNum()) car.go();
        })    
    }


    
}

module.exports = Racing

const racing = new Racing()
racing.play()