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
            this.createCars(carNames);
            
            this.getTotalRound();
        })
    }
    
    getTotalRound() {
        OutputView.askRound();
        inputView.inputRound((round) => {
            OutputView.outputResultTitle();
            for (let i = 0; i < round; i++) {
                this.getRoundResult()
            }
        })
    }

    getRoundResult() {
        this.goStop()
        OutputView.outputRoundResult(this.cars,this.getCarScores())
    }

    getCarScores() {
        const scores = []
        this.cars.forEach(eachCar => {
            scores.push(eachCar.getScore())
        });
        return scores
    }

    getCarNames() {
        const names = []
        this.cars.forEach((eachCar) => {
            names.push(eachCar.getCarName())
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

    


    
}

module.exports = Racing

const racing = new Racing()
racing.play()