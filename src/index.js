import Car from "./Car.js";
import { $ } from "./dom.js";

const RANDOM_MAX_NUMBER = 9;
class RacingcarGame {
  constructor() {
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;

    this.template = new Template();

    $(".race-count-wrap").style.visibility = "hidden";

    this.bindEvent();
  }

  bindEvent() {
    $(".car-name-form").addEventListener("submit", (event) => {
      event.preventDefault();
      this.checkCarName();
      if (this.canStartGame()) {
        this.startGame();
      }
    });
    $(".race-count-form").addEventListener("submit", (event) => {
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
    this.raceCount = $(".race-count-input").value;
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
    this.showCarsMove();
    const winner = this.findWinner();
    this.showWinner(winner);
    this.bindRestartEvent();
  }

  playGame() {
    for (let i = 0; i < this.raceCount; i += 1) {
      this.carList.forEach((eachCar) => {
        const randomRaceScore = parseInt(
          Math.random() * (RANDOM_MAX_NUMBER + 1)
        );
        if (eachCar.canMove(randomRaceScore)) {
          eachCar.move();
        }
      });
    }
  }

  showCarsMove() {
    this.carList
      .map((car) => this.template.carArrow(car.count))
      .map((arrowTemplate) => {
        const wrap = document.createElement("div");
        wrap.classList.add("racing-arrow-box");
        wrap.innerHTML = arrowTemplate;
        $(".racing-arrow").append(wrap);
      });
  }

  showCarBoxes() {
    $(".racing-cars").innerHTML = this.carList
      .map((car) => car.carNameTemplate)
      .join("");
  }

  findWinner() {
    let winnerCount = Math.max(this.carList);
    let winner = this.carList.filter((car) => car.count == winnerCount);
    return winner.join(", ");
  }

  showWinner(winner) {
    $(
      ".racing-result"
    ).innerHTML = `<p class="racing-winner">🏆 최종 우승자: ${winner} 🏆</p>`;
    $(".racing-result").innerHTML +=
      "<div class='restart-button'>다시 시작하기</div>";
    this.makeDisableInput();
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
  carArrow(eachcount) {
    return `<div class="racing-arrow-wrap">⬇️️</div>`.repeat(eachcount);
  }
}

new RacingcarGame();
