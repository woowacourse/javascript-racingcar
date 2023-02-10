const Car = require("./Car");
const inputView = require("./InputView");
const OutputView = require("./OutputView");
const random = require("./Random");
const validations = require("./validations");
const Racing = require("./Racing");
const CONSTANT = require("./Constant");


class App {
    constructor() {
        this.cars = [];
    }

    play() {
        this.startRace()
    }
    
    startRace() {
        inputView.readUserInput((input) => {
            const carNames = input.split(",");
            this.createCars(carNames);
            this.getTotalRound()
        }, CONSTANT.INPUT_CAR_MASSEGE)
    }
    
    getTotalRound() {
        inputView.readUserInput((round => {
            OutputView.outputResultTitle();
            this.moveCar(round);
            this.printFinalResult();
        }),CONSTANT.INPUT_ROUND_MASSEGE)
    }

    moveCar(round) {
        for (let i = 0; i < round; i++) {
            this.goStop()
            OutputView.outputRoundResult(this.cars)
        }
    }

    getCarNames() {
        const names = []
        this.cars.forEach((eachCar) => {
            names.push(eachCar.getCarName());
        })

        return names
    }

    createCars(names) {
        names.forEach(carName => {
            this.cars.push(new Car(carName))
        });
    }

    goStop() {
        this.cars.forEach(car => {
            const racing = new Racing(car)
            racing.raceEachCar()

        })    
    }

    printFinalResult() {
        OutputView.outputRoundResult(this.cars)
        OutputView.outputWinner(this.getWinner())
    }

    getWinner() {
        const winnerScore = this.getWinnerScore()
        const winners = this.cars.filter(car => car.getScore() === winnerScore).map(car => {
            if (car.getScore() === winnerScore) {
                winnerScore = car.getScore()

                return car.getCarName()
            }
        })

        return winners
    }

    getWinnerScore() {
        let winnerScore = 0
        this.cars.forEach(car => {
            winnerScore = Math.max(winnerScore, car.getScore())
        })

        return winnerScore
    }
}

module.exports = App

const app = new App()
app.play()