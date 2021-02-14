import RacingCarModel from "./model.js";
import RacingCarView from "./view.js";
import Validator from "../validator/validator.js";
import { generateRandomNumber, $ } from "../utils/util.js";
import { RANDOM, GAME } from "../constants/constant.js";
import Message from "../layouts/message.js";

class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
    this.validator = new Validator();
    this.message = new Message();
  }

  init() {
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

  play() {
    const moves = this.model.cars.map(() => {
      return this.goStop();
    });
    this.model.moveCar(moves);
    this.view.renderProcess(this.model.cars);
  }

  startGame() {
    const count = this.model.count;
    this.view.renderProcess(this.model.cars);
    this.view.renderGameLoading();

    let playCount = 1;
    const playGame = setInterval(() => {
      this.play();
      if (playCount++ >= count) {
        clearInterval(playGame);
        this.showResult();
      } else {
        this.view.renderGameLoading();
      }
    }, 1000);
  }

  manageCars() {
    const carNames = this.carsInput;
    if (this.validator.isCarValid(carNames)) {
      this.model.initCar(carNames);
      this.view.renderCount();
      this.handleCount();
    }
  }

  manageCount() {
    const count = this.countInput;
    if (this.validator.isCountValid(count)) {
      this.model.count = parseInt(count, 10);
      this.startGame();
    }
  }

  showResult() {
    const winners = this.winners;
    this.view.renderResult(winners);
    this.handleReset();
    setTimeout(() => {
      alert(this.message.winnerMessage(winners));
    }, 2000);
  }

  reset() {
    this.model.reset();
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
