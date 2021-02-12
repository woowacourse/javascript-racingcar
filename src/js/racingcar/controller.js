import RacingCarModel from "./model.js";
import RacingCarView from "./view.js";
import Validator from "../validator/validator.js";
import { generateRandomNumber, $ } from "../utils/util.js";
import { RANDOM, INIT, GAME } from "../constants/constant.js";

class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
    this.validator = new Validator();
    this.handleCars();
  }

  get carsInput() {
    const $carInput = $("#car-input") && $("#car-input").value;
    const carNames = $carInput.split(",").map(car => car.trim());

    return carNames;
  }

  get countInput() {
    const $countInput = $("#count-input") && $("#count-input").value;

    return $countInput;
  }

  get winners() {
    const cars = this.model.cars;
    const maxForward = Math.max(...cars.map(car => car.forward));
    const winner = [];
    cars.forEach(car => {
      car.forward === maxForward && winner.push(car.name);
    });

    return winner;
  }

  // T면 1(전진), F면 0(스톱) 반환
  goStop() {
    const randomNumber = generateRandomNumber(RANDOM.MIN_NUM, RANDOM.MAX_NUM);
    if (randomNumber >= GAME.FORWARD_STANDARD_NUM) {
      return GAME.GO_NUM;
    }

    return GAME.STOP_NUM;
  }

  play(cars) {
    const newCars = cars.map(car => {
      return { ...car, forward: car.forward + this.goStop() };
    });

    return newCars;
  }

  startGame() {
    let cars = this.model.cars;
    for (let i = 0; i < this.model.count; i++) {
      cars = this.play(cars);
    }
    this.model.cars = cars;
  }

  manageCars() {
    const carNames = this.carsInput;
    if (this.validator.isCarValid(carNames)) {
      const cars = carNames.map(carName => {
        return { name: carName, forward: INIT.FORWARD };
      });
      this.model.cars = cars;
      this.view.renderCount();
      this.handleCount();
    }
  }

  manageCount() {
    const count = this.countInput;
    if (this.validator.isCountValid(count)) {
      this.model.count = parseInt(count, 10);
      this.startGame();
      this.view.renderProcess(this.model.cars);
      this.showResult();
    }
  }

  showResult() {
    const winners = this.winners;
    this.view.renderResult(winners);
    this.handleReset();
  }

  reset() {
    this.model.cars = INIT.CARS;
    this.model.count = INIT.COUNT;
    this.view.reset();
  }

  handleCars() {
    const $carBtn = $("#car-btn");
    $carBtn.addEventListener("click", () => {
      this.manageCars();
    });
  }

  handleCount() {
    const $countBtn = $("#count-btn");
    $countBtn.addEventListener("click", () => {
      this.manageCount();
    });
  }

  handleReset() {
    const $resetBtn = $("#reset-btn");
    $resetBtn.addEventListener("click", () => {
      this.reset();
    });
  }
}

export default RacingCarController;
