const Car = require("./Car");
const Cars = require("./Cars");
const Racing = require("./Racing");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const CONSTANT = require("./Constants");
const Random = require("./Random");

class App {

    play() {
        this.startRace()
    }
    
    startRace() {
        InputView.readUserInput((input) => {
            const carNames = input.split(",");
            const cars = new Cars(this.createCars(carNames))
            this.getRound(cars)
        }, CONSTANT.INPUT_CAR_MASSEGE)
    }

    createCars(carNames) {
        const cars = carNames.map(carName => {
            return new Car(carName)
        });
        return cars
    }
    
    getRound(cars) {
        InputView.readUserInput((round => {
            this.getTotalResult(round,cars);
        }),CONSTANT.INPUT_ROUND_MASSEGE)
    }
    
    getTotalResult(round,cars) {
        OutputView.outputResultTitle();
        this.getRoundResult(round,cars)
        this.getFinalResult(cars);
    }

    getRoundResult(round,cars) {
        for (let i = 0; i < round; i++) {
            this.moveCar(cars)
            OutputView.outputRoundResult(cars.getCars())
        }
    }

    moveCar(cars) {
        cars.getCars().forEach(car => {
            const racing = new Racing(car)
            racing.raceEachCar(Random.generateRandomNumber())
        })    
    }
    
    getFinalResult(cars) {
        OutputView.outputRoundResult(cars.getCars())
        cars.decideWinnerCar()
        OutputView.outputWinner(cars.getWinnerCar())
    }

}

module.exports = App
const app = new App()
app.play()