import Car from "./Model/Car.js";
import { $ } from "./dom.js";

const RANDOM_MAX_NUMBER = 9;
const GAME_DELAY_TIME = 1000;
const GAME_RESULT_DELAY_TIME = 2000;
class RacingcarGame {
  constructor() {
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;

    this.template = new Template();

    $(".race-count-wrap").style.visibility = "hidden";

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
        alert("몇 번의 이동을 할 것인지 1 이상의 수를 입력해주세요.");
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
      alert("차 이름은 5자 이하만 가능합니다.");
      this.isCorrectCarName = false;
      $(".race-count-wrap").style.visibility = "hidden";
      return;
    }
    this.isCorrectCarName = true;
    $(".race-count-wrap").style.visibility = "visible";
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
      .map((car) => Template.carNameBox(car.name))
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
      wrap.innerHTML = Template.loading();
      $(".racing-arrow").append(wrap);
    });
  }

  showCarMove(index) {
    $(`#racing-arrow-box-${index}`).insertAdjacentHTML(
      "afterbegin",
      Template.carArrow()
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
    this.makeDisableInput();
    setTimeout(
      this.alertCongratsMessage.bind(this),
      GAME_RESULT_DELAY_TIME,
      winner
    );
  }

  alertCongratsMessage(winner) {
    alert(`${winner} 우승을 축하합니다!`);
  }

  makeDisableInput() {
    $(".car-name-input").disabled = true;
    $(".race-count-input").disabled = true;
    $(".car-name-button").disabled = true;
    $(".race-count-button").disabled = true;
  }

  bindRestartEvent() {
    $(".restart-button").addEventListener("click", () => {
      this.restartRace();
    });
  }

  restartRace() {
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;
    $(".racing-cars").innerHTML = "";
    $(".racing-arrow").innerHTML = "";
    $(".racing-result").innerHTML = "";
    $(".car-name-input").value = "";
    $(".race-count-input").value = "";
    $(".car-name-input").disabled = false;
    $(".race-count-input").disabled = false;
    $(".car-name-button").disabled = false;
    $(".race-count-button").disabled = false;
    $(".race-count-wrap").style.visibility = "hidden";
  }
}

class Template {
  static carArrow() {
    return '<div class="racing-arrow-wrap">⬇️️</div>';
  }

  static loading() {
    return '<div class="loading-spin-wrap"> </div>';
  }

  static carNameBox(carName) {
    return `
      <div class="car-name-box">
        <div class="car-name-box-text">${carName}</div>
      </div>
    `;
  }
}

new RacingcarGame();
