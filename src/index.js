const Car = require("./domain/Car");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const Move = require("./domain/Move");
const Random = require("./domain/Random");

class App {
    #cars;

    constructor() {
        this.#cars = [];
    }

    play() {
        this.startRace();
    }

    startRace() {
        InputView.inputCarName((carNames) => {
            this.createCars(carNames);
            this.racing();
        });
    }

    createCars(names) {
        names.forEach((carName) => {
            this.#cars.push(new Car(carName));
        });
        return this.#cars.length;
    }

    racing() {
        InputView.inputRound((roundCount) => {
            OutputView.resultTitle();
            this.totalRoundRun(roundCount);
            this.printTotalRoundResult();
        });
    }

    totalRoundRun(round) {
        for (let i = 0; i < round; i++) {
            this.eachRoundRun();
            this.printEachRoundResult();
            console.log("");
        }
    }

    eachRoundRun() {
        this.#cars.forEach((car) => {
            Move.carMove(car, Random.getRandomNumber);
        });
    }

    printEachRoundResult() {
        this.#cars.forEach((car) => {
            OutputView.roundResult(car.exportNameScore());
        });
    }

    printTotalRoundResult() {
        this.printEachRoundResult();
        const winner = this.getWinner();
        console.log("");
        if (this.checkWinnerNone(winner))
            return OutputView.totalWinnerResult(winner);
        return OutputView.noneWinnerResult();
    }

    getWinner() {
        let winner = [];
        let winnerScore = 0;
        this.#cars.forEach((car) => {
            const [name, score] = car.exportNameScore();
            if (score > winnerScore) {
                winnerScore = score;
                winner = [name];
            } else if (score !== 0 && score === winnerScore) winner.push(name);
        });
        return winner;
    }

    checkWinnerNone(winner) {
        return winner.length !== 0;
    }
}

module.exports = App;

const app = new App();
app.play();
