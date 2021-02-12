import RacingCarModel from "./model.js";
import RacingCarView from "./view.js";
import Validator from "../validator/validator.js";
import Util from "../utils/util.js";
import { RANDOM, INIT, GAME } from "../constants/constant.js";

class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
    this.validator = new Validator();
    this.util = new Util();
    this.handleCars();
  }

  getCarsInput() {
    const $carInput = document.querySelector("#car-input").value;
    const carNames = $carInput.split(",").map(car => car.trim());

    return carNames;
  }

  getCountInput() {
    const $countInput = document.querySelector("#count-input").value;

    return $countInput;
  }

  getWinners() {
    const cars = this.model.getCars();
    const maxForward = Math.max(...cars.map(car => car.forward));
    const winner = [];
    cars.forEach(car => {
      car.forward === maxForward && winner.push(car.name);
    });

    return winner;
  }

  // T면 1(전진), F면 0(스톱) 반환
  goStop() {
    const randomNumber = this.util.generateRandomNumber(
      RANDOM.MIN_NUM,
      RANDOM.MAX_NUM
    );
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
    let cars = this.model.getCars();
    for (let i = 0; i < this.model.getCount(); i++) {
      cars = this.play(cars);
    }
    this.model.setCars(cars);
  }

  manageCars() {
    const carNames = this.getCarsInput();
    if (this.validator.isCarValid(carNames)) {
      const cars = carNames.map(carName => {
        return { name: carName, forward: INIT.FORWARD };
      });
      this.model.setCars(cars);
      this.view.renderCount();
      this.handleCount();
    }
  }

  manageCount() {
    const count = this.getCountInput();
    if (this.validator.isCountValid(count)) {
      this.model.setCount(parseInt(count, 10));
      this.startGame();
      this.view.renderProcess(this.model.getCars());
      this.showResult();
    }
  }

  showResult() {
    const winners = this.getWinners();
    this.view.renderResult(winners);
    this.handleReset();
  }

  reset() {
    this.model.setCars(INIT.CARS);
    this.model.setCount(INIT.COUNT);
    this.view.reset();
  }

  handleCars() {
    const $carBtn = document.querySelector("#car-btn");
    $carBtn.addEventListener("click", () => {
      this.manageCars();
    });
  }

  handleCount() {
    const $countBtn = document.querySelector("#count-btn");
    $countBtn.addEventListener("click", () => {
      this.manageCount();
    });
  }

  handleReset() {
    const $resetBtn = document.querySelector("#reset-btn");
    $resetBtn.addEventListener("click", () => {
      this.reset();
    });
  }
}

export default RacingCarController;
