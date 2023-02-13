const Car = require("./domain/Car");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const Move = require("./domain/Move");
const Random = require("./domain/Random");

class Racing {
    #cars;

    constructor() {
        this.#cars = [];
    }

    startRace() {
        InputView.inputCarName((carNames) => {
            this.createCars(carNames);
            this.getWinner();
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
            Move.moveCar(car, Random.getRandomNumber);
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
        if (this.checkWinnerNone(winner))
            return `\n${OutputView.totalWinnerResult(winner)}`;
        return `\n${OutputView.noneWinnerResult()}`;
    }

    getWinner() {
        const winnerScore = Math.max(
            ...this.#cars.map((car) => car.exportNameScore()[1])
        );
        const winner = this.#cars.map((car) => {
            car.exportNameScore()[1] === winnerScore;
            return car.exportNameScore()[0];
        });
        return winner;
    }

    checkWinnerNone(winner) {
        return winner.length !== 0;
    }
}

module.exports = Racing;
