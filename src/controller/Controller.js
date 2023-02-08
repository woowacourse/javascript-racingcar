const Car = require("../model/Car")
const InputView = require("../views/InputView")
const OutputView = require("../views/OutputView")

class Controller {
    #cars;

    constructor() {
        this.#cars = [];
    }

    start() {
        InputView.inputCarName((answer) => {
            let val = answer.split(',');

            this.makeCar(val);
        })
    }

    makeCar(carNames) {
        for (let i = 0; i < carNames.length; i++) {
            let car = new Car();
            car.inputName(carNames[i]);
            this.#cars.push(car);
        }

        this.makeNumber()
    }

    makeNumber() {
        InputView.inputNumber((answer) => {
            let val2 = Number(answer);
            this.makeCarMove(val2);
        })
    }

    makeCarMove(tryNumber) {
        for (let i = 0; i < tryNumber; i++) {
            this.moveCar()
            OutputView.printCarMove(this.#cars)
        }

        OutputView.printWinners(this.whoIsWinners())
    }

    moveCar() {
        for (let car of this.#cars) {
            car.decideGoAndStop(this.getRandomNumber());
        }
    }

    getRandomNumber() {
        return Math.floor(Math.random() * (10 - 0) + 0);
    }

    whoIsWinners() {
        let winners = [];
        let maxPosition = 0;

        for (let car of this.#cars) {
            if (maxPosition === car.getPosition()) {
                winners.push(car.getName());
            }

            if (maxPosition < car.getPosition()) {
                maxPosition = car.getPosition();
                winners = [];
                winners.push(car.getName());
            }
        }

        return winners;
    }
}

module.exports = Controller