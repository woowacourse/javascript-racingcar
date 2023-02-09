const Car = require("../model/Car");
const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const { RANDOM } = require("../utils/Constant");

class Controller {
    #cars;

    constructor() {
        this.#cars = [];
    }

    start() {
        InputView.inputCarName((answer) => {
            let nameOfCars = answer.split(',');

            this.makeCar(nameOfCars);
        })
    }

    makeCar(carNames) {
        for (let len = 0; len < carNames.length; len++) {
            let car = new Car();
            car.inputName(carNames[i]);
            this.#cars.push(car);
        }

        this.makeNumber()
    }

    makeNumber() {
        InputView.inputNumber((answer) => {
            let tryNumber = Number(answer);
            this.makeCarMove(tryNumber);
        })
    }

    makeCarMove(tryNumber) {
        for (let num = 0; num < tryNumber; num++) {
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
        return Math.floor(Math.random() * (RANDOM.MAXNUMBER - RANDOM.MINNUMBER) + RANDOM.MINNUMBER);
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