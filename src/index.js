const Car = require("./Car");
const inputView = require("./InputView");
const OutputView = require("./OutputView");
const random = require("./Random");
const validations = require("./validations");
const Racing = require("./Racing")


class App {
    constructor() {
        this.cars = [];
    }

    play() {
        this.startRace()
    }
    
    startRace() {
        inputView.inputCarName((input) => {
            const carNames = input.split(",");
            try {
                validations.validateCarNameLength(carNames);
                validations.validateIsCarName(carNames)
                this.createCars(carNames);
                this.getTotalRound();
            } catch (e) {
                console.log(e.message);
                this.startRace();
            }
        })
    }
    
    getTotalRound() {
        inputView.inputRound((round) => {
            OutputView.outputResultTitle(); 
            this.moveCar(round);
            this.printFinalResult();
        })
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
        names.forEach( carName => {
            this.cars.push(new Car(carName))
        });
    }

    goStop() {
        this.cars.forEach( car => {
            const racing = new Racing(car)
            racing.raceEachCar()

        })    
    }

    printFinalResult() {
        OutputView.outputRoundResult(this.cars)
        OutputView.outputWinner(this.getWinner())
    }

    getWinner() {
        let winner = []
        let winnerScore = 0;
        this.cars.forEach(car => {
            if (car.getScore() > winnerScore) {
                winnerScore = car.getScore();
                winner = [car.getCarName()];
            } else if (car.getScore() === winnerScore) winner.push(car.getCarName());
        })
        return winner 
    }
}

module.exports = App

const app = new App()
app.play()