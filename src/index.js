import {
  RANDOM_MAX_NUMBER,
  GAME_DELAY_TIME,
  GAME_RESULT_DELAY_TIME,
  alertMessage,
  SELECTOR,
} from "./constants/ConstantsManager.js";

import Car from "./model/Car.js";

import ViewManager from "./view/ViewManager.js";

import { $ } from "./utils/dom.js";

class RacingcarGame {
  constructor() {
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;

    ViewManager.setRaceCountSectionVisibility("hidden");
    this.bindEvent();
  }

  bindEvent() {
    this.bindCarNameEvent();
    this.bindRaceCountEvent();
  }

  bindCarNameEvent() {
    $(SELECTOR.car_name_button).addEventListener("click", (event) => {
      event.preventDefault();
      this.checkCarName();
      if (this.canStartGame()) {
        this.startGame();
      }
    });
  }

  bindRaceCountEvent() {
    $(SELECTOR.race_count_button).addEventListener("click", (event) => {
      event.preventDefault();
      this.isCorrectRaceCount = this.isValidRaceNumber();
      if (!this.isCorrectRaceCount) {
        alert(alertMessage.InvalidRaceCount);
        return;
      }
      if (this.canStartGame()) {
        this.startGame();
      }
    });
  }

  checkCarName() {
    this.carNames = $(SELECTOR.car_name_input).value.split(",");
    const errorCarName = this.carNames.filter((name) => name.length > 5);
    if (errorCarName.length > 0 || $(SELECTOR.car_name_input).value === "") {
      alert(alertMessage.InvalidCarNameLength);
      this.isCorrectCarName = false;
      ViewManager.setRaceCountSectionVisibility("hidden");
      return;
    }
    this.isCorrectCarName = true;
    ViewManager.setRaceCountSectionVisibility("visible");
  }

  isValidRaceNumber() {
    this.raceCount = Number($(SELECTOR.race_count_input).value);
    if (this.raceCount === "" || this.raceCount <= 0) {
      return false;
    }
    return true;
  }

  canStartGame() {
    if (this.isCorrectCarName === false || this.isCorrectRaceCount === false) {
      return false;
    }
    return true;
  }

  startGame() {
    this.carList = this.carNames.map((name) => new Car(name));
    this.showCarBoxes();
    this.playGame();
  }

  showCarBoxes() {
    $(SELECTOR.racing_cars).insertAdjacentHTML(
      "afterbegin",
      this.carList.map((car) => ViewManager.carNameBox(car)).join("")
    );
  }

  playGame() {
    let count = 0;
    this.settingCarMove();
    const racingTimer = setInterval(() => {
      this.playOneTurn();
      count += 1;
      if (count === this.raceCount) {
        clearInterval(racingTimer);
        this.endGame();
      }
    }, GAME_DELAY_TIME);
  }

  playOneTurn() {
    this.carList.forEach((eachCar, index) => {
      const randomRaceScore = parseInt(Math.random() * (RANDOM_MAX_NUMBER + 1));
      if (eachCar.canMove(randomRaceScore)) {
        eachCar.move();
        ViewManager.showCarMove(index);
      }
    });
  }

  settingCarMove() {
    this.carList.forEach((car, index) => {
      const wrap = document.createElement("div");
      wrap.setAttribute("class", "racing-arrow-box");
      wrap.setAttribute("id", `racing-arrow-box-${index}`);
      wrap.insertAdjacentHTML("afterbegin", ViewManager.loading());
      $(SELECTOR.racing_arrow).append(wrap);
    });
  }

  endGame() {
    this.endLoading();
    const winner = this.findWinner();
    this.showWinner(winner);
  }

  endLoading() {
    this.carList.forEach((car, index) => {
      const carMoveState = $(`#racing-arrow-box-${index}`);
      carMoveState.removeChild(carMoveState.lastChild);
    });
  }

  findWinner() {
    const carCountList = this.carList.map((car) => car.count);
    const winnerCount = Math.max(...carCountList);
    const winner = this.carList
      .filter((car) => car.count === winnerCount)
      .map((car) => car.name);
    return winner.join(", ");
  }

  showWinner(winner) {
    $(SELECTOR.racing_result).insertAdjacentHTML(
      "afterbegin",
      `<p class="racing-winner">🏆 최종 우승자: ${winner} 🏆</p>`
    );
    $(SELECTOR.racing_result).insertAdjacentHTML(
      "beforeend",
      "<div class='restart-button'>다시 시작하기</div>"
    );
    this.bindRestartEvent();
    ViewManager.setInputDisable(true);
    setTimeout(
      RacingcarGame.alertCongratsMessage,
      GAME_RESULT_DELAY_TIME,
      winner
    );
  }

  static alertCongratsMessage(winner) {
    alert(`${winner} 우승을 축하합니다!`);
  }

  bindRestartEvent() {
    $(SELECTOR.restart_button).addEventListener("click", this.restartRace);
  }

  restartRace() {
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;
    ViewManager.restartSetting();
  }
}

new RacingcarGame();
