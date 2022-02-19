import {
  RANDOM_MAX_NUMBER,
  GAME_DELAY_TIME,
  GAME_RESULT_DELAY_TIME,
  alertMessage,
} from "./constants/ConstantsManager.js";
import Car from "./model/Car.js";
import ViewManager from "./view/ViewManager.js";
import { $ } from "./utils/dom.js";

class RacingcarGame {
  constructor() {
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;

    ViewManager.hideRaceCountSection();

    this.bindEvent();
  }

  bindEvent() {
    $(".car-name-button").addEventListener("click", (event) => {
      event.preventDefault();
      this.checkCarName();
      if (this.canStartGame()) {
        this.startGame();
      }
    });
    $(".race-count-button").addEventListener("click", (event) => {
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
    this.carNames = $(".car-name-input").value.split(",");
    const errorCarName = this.carNames.filter((name) => name.length > 5);
    if (errorCarName.length > 0 || $(".car-name-input").value == "") {
      alert(alertMessage.InvalidCarNameLength);
      this.isCorrectCarName = false;
      ViewManager.hideRaceCountSection();
      return;
    }
    this.isCorrectCarName = true;
    ViewManager.showRaceCountSection();
  }

  isValidRaceNumber() {
    this.raceCount = Number($(".race-count-input").value);
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
    $(".racing-cars").innerHTML = this.carList
      .map((car) => ViewManager.carNameBox(car))
      .join("");
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
        this.showCarMove(index);
      }
    });
  }

  settingCarMove() {
    this.carList.forEach((car, index) => {
      const wrap = document.createElement("div");
      wrap.setAttribute("class", "racing-arrow-box");
      wrap.setAttribute("id", `racing-arrow-box-${index}`);
      wrap.innerHTML = ViewManager.loading();
      $(".racing-arrow").append(wrap);
    });
  }

  showCarMove(index) {
    $(`#racing-arrow-box-${index}`).insertAdjacentHTML(
      "afterbegin",
      ViewManager.carArrow()
    );
  }

  endGame() {
    this.endLoading();
    const winner = this.findWinner();
    this.showWinner(winner);
  }

  endLoading() {
    this.carList.forEach((car, index) => {
      let carMoveState = $(`#racing-arrow-box-${index}`);
      carMoveState.removeChild(carMoveState.lastChild);
    });
  }

  findWinner() {
    const carCountList = this.carList.map((car) => car.count);
    let winnerCount = Math.max(...carCountList);
    let winner = this.carList
      .filter((car) => car.count == winnerCount)
      .map((car) => car.name);
    return winner.join(", ");
  }

  showWinner(winner) {
    $(
      ".racing-result"
    ).innerHTML = `<p class="racing-winner">🏆 최종 우승자: ${winner} 🏆</p>`;
    $(".racing-result").insertAdjacentHTML(
      "beforeend",
      "<div class='restart-button'>다시 시작하기</div>"
    );
    this.bindRestartEvent();
    ViewManager.makeDisableInput();
    setTimeout(
      this.alertCongratsMessage.bind(this),
      GAME_RESULT_DELAY_TIME,
      winner
    );
  }

  alertCongratsMessage(winner) {
    alert(`${winner} 우승을 축하합니다!`);
  }

  bindRestartEvent() {
    $(".restart-button").addEventListener("click", () => {
      this.restartRace();
    });
  }

  restartRace() {
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;
    ViewManager.restartSetting();
  }
}

new RacingcarGame();
