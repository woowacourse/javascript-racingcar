const { View } = require("./View");
const { Validator } = require("./Validator");
const { RESULT_TYPE, MESSAGE, GAME_VALUE } = require("./constants");
const { Car } = require("./Car");
const { randomGenerator } = require("./randomGenerator");

class Controller {
  #cars;

  startGame() {
    this.askCarName();
  }

  askCarName() {
    View.input(MESSAGE.ASK_CAR_NAME, this.handleCarName.bind(this));
  }

  handleCarName(inputValue) {
    try {
      const names = inputValue.replace(/ /g, "").split(",");
      Validator.validateName(names);
      this.#cars = names.map((name) => new Car(name));
    } catch ({ message }) {
      View.output(MESSAGE.ERROR(message));
      return this.askCarName();
    }

    this.askTryCnt();
  }

  askTryCnt() {
    View.input(MESSAGE.ASK_TRY_COUNT, this.handleTryCnt.bind(this));
  }

  handleTryCnt(tryCount) {
    try {
      Validator.validateTryCnt(tryCount);
    } catch ({ message }) {
      View.output(MESSAGE.ERROR(message));
      return this.askTryCnt();
    }

    this.printResult(tryCount);
  }

  printResult(tryCount) {
    View.output(MESSAGE.RESULT);

    Array.from({ length: tryCount }, () => 0).forEach(() => {
      const moveCnt = this.getmoveCnt();
      View.output(moveCnt, RESULT_TYPE.MOVE_CNT);
    });

    const winners = this.getWinners();
    View.output(winners, RESULT_TYPE.WINNERS);

    this.exitGame();
  }

  getmoveCnt() {
    const roundLog = {};

    this.#cars.forEach((car) => {
      this.decideMove(car);
      const { name, moveCnt } = car.getCarInfo();
      roundLog[name] = moveCnt;
    });

    return roundLog;
  }

  decideMove(car) {
    const randomNumber = randomGenerator.generateNumber();
    if (randomNumber >= GAME_VALUE.MOVING_BOUNDARY_VALUE) return car.move();
  }

  getWinners() {
    const cars = this.#cars.map((car) => car.getCarInfo());
    const max = cars.sort((a, b) => b.moveCnt - a.moveCnt)[0].moveCnt;
    const winner = cars
      .filter((car) => car.moveCnt === max)
      .map((car) => car.name);
    return winner;
  }

  exitGame() {
    View.close();
  }
}

module.exports = { Controller };
