const Car = require("./Car");
const Cars = require("./Cars");
const Racing = require("./Racing");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const Constants = require("../Constants");
const Random = require("../utils/Random");
const Validations = require("../utils/validations");

class App {
    play() {
        this.startRace();
    }
    
    startRace() {
        InputView.readUserInput((input) => {
            try {
                this.validateCarInput(this.getSplitedCarName(input));
                const cars = new Cars(this.createCars(this.getSplitedCarName(input)));
                this.getRound(cars);
            } catch (e) {
                console.log(e);
                this.startRace();
            }
        }, Constants.INPUT_CAR_MASSEGE+Constants.ENTER);
    }

    getSplitedCarName(carNames) {
        return carNames.split(",");
    }

    validateCarInput(carNames) {
        if (!Validations.isCarNameUnderMax(carNames)) {
            throw new Error(Constants.ERROR_CAR_LENGTH);
        };
        if (!Validations.isCarNameOverMin(carNames)) {
            throw new Error(Constants.ERROR_CAR_NONAME);
        };
    }

    createCars(carNames) {
        const cars = carNames.map(carName => {
            return new Car(carName);
        });
        return cars;
    }
    
    getRound(cars) {
        InputView.readUserInput((round => {
            try {
                this.validateRoundInput(Number(round))
                this.getTotalResult(Number(round), cars);
            } catch (e) {
                console.log(e);
                this.getRound(cars);
            }
        }), Constants.INPUT_ROUND_MASSEGE+Constants.ENTER);
    }

    validateRoundInput(round) {
        if (!Validations.isCorrectRoundNumber(round)) {
            throw new Error(Constants.ERROR_ROUND);
        }
    }
    
    getTotalResult(round,cars) {
        OutputView.outputResultTitle();
        this.getRoundResult(round, cars);
        this.getFinalResult(cars);
    }

    getRoundResult(round,cars) {
        for (let i = 0; i < round; i++) {
            this.moveCar(cars);
            OutputView.outputRoundResult(cars.getCars());
        };
    }

    moveCar(cars) {
        cars.getCars().forEach(car => {
            const racing = new Racing(car);
            racing.raceEachCar(Random.generateRandomNumber());
        });
    }
    
    getFinalResult(cars) {
        OutputView.outputRoundResult(cars.getCars());
        cars.decideWinnerCar();
        OutputView.outputWinner(cars.getWinnerCar());
    }
}

module.exports = App;
const app = new App();
app.play();