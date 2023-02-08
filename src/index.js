const Car = require("./Car");
const inputView = require("./InputView");
const OutputView = require("./OutputView");
const random = require("./Random");
const validations = require("./validations");


class Racing {
    constructor() {
        this.cars = [];
    }

    play() {
        OutputView.askCarName();
        this.startRace()
    }
    
    startRace() {
        inputView.inputCarName((input) => {
            console.log("fuck")
            const carNames = input.split(",");
            try {
                validations.validateCarNameLength(carNames);
                validations.validateIsCarName(carNames)
                this.createCars(carNames);
                this.getTotalRound();
            } catch (e) {
                console.log(e.message);
                OutputView.askCarName();
                // inputView.inputCarName();
                this.startRace();
            }
        })
    }
    
    getTotalRound() {
        OutputView.askRound();
        inputView.inputRound((round) => {
            OutputView.outputResultTitle(); 
            for (let i = 0; i < round; i++) {
                this.getRoundResult()
            }
            this.printFinalResult();
        })
    }

    getRoundResult() {
        this.goStop()
        OutputView.outputRoundResult(this.cars)
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

    checkRandomNum() {
        const randomNum = random();
        return (randomNum >= 4)
    }

    goStop() {
        this.cars.forEach( car => {
            if (this.checkRandomNum()) car.go();
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

module.exports = Racing

const racing = new Racing()
racing.play()