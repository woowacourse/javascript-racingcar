import Car from "./Car.js";

class RacingcarGame {
  constructor() {
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;

    this.template = new Template();

    this.carNameForm = document.querySelector(".car-name-form");
    this.raceCountForm = document.querySelector(".race-count-form");
    this.carNameInput = document.querySelector(".car-name-input");
    this.raceCountInput = document.querySelector(".race-count-input");

    this.raceCountDisplay = document.querySelector(".race-count-wrap");
    this.raceCountDisplay.style.visibility = "hidden";

    this.bindEvent();
  }

  bindEvent() {
    this.carNameForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.checkCarName();
      this.checkStartGame();
    });
    this.raceCountForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.checkRaceNumber();
      this.checkStartGame();
    });
  }

  checkCarName() {
    this.carName = this.carNameInput.value.split(",");
    this.carName.forEach((name) => {
      if (name.length > 5) {
        alert("차 이름은 5자 이하만 가능합니다.");
        this.isCorrectCarName = false;
        this.raceCountDisplay.style.visibility = "hidden";
        return;
      }
    });
    this.isCorrectCarName = true;
    this.raceCountDisplay.style.visibility = "visible";
  }

  checkRaceNumber() {
    this.raceCount = this.raceCountInput.value;
    if (this.raceCount === "") {
      alert("몇 번의 이동을 할 것인지를 입력해주세요.");
      this.isCorrectRaceCount = false;
      return;
    }
    this.isCorrectRaceCount = true;
  }

  checkStartGame() {
    if (this.isCorrectCarName === false || this.isCorrectRaceCount === false) {
      return;
    }
    this.startGame();
  }

  startGame() {
    this.carList = this.carName.map((name) => new Car(name));
    this.showCarBoxes();
    this.countCarsMove();
    this.showCarsMove();
    const winner = this.findWinner();
    this.showWinner(winner);
    this.bindRestartEvent();
  }

  countCarsMove() {
    for (let i = 0; i < this.raceCount; i += 1) {
      this.carList.forEach((eachCar) => {
        eachCar.move();
      });
    }
  }

  showCarsMove() {
    this.racingArrowElement = document.querySelector(".racing-arrow");
    this.carList
      .map((car) => this.template.carArrow(car.count))
      .map((arrowTemplate) => {
        const wrap = document.createElement("div");
        wrap.classList.add("racing-arrow-box");
        wrap.innerHTML = arrowTemplate;
        this.racingArrowElement.append(wrap);
      });
  }

  showCarBoxes() {
    this.racingCarsElement = document.querySelector(".racing-cars");
    this.racingCarsElement.innerHTML = this.carList
      .map((car) => car.carNameTemplate)
      .join("");
  }

  findWinner() {
    return this.carList
      .filter((car) => car.count === Math.max(...this.carList.map((car) => car.count)))
      .map((car) => car.carName)
      .join(", ");
  }

  showWinner(winner) {
    this.racingResultElement = document.querySelector(".racing-result");
    this.racingResultElement.innerHTML = this.template.racingResult(winner);
    this.makeDisableForm();
  }

  makeDisableForm() {
    this.carNameInputButton = document.querySelector(".car-name-button");
    this.raceCountInputButton = document.querySelector(".race-count-button");
    this.carNameInputButton.disabled = true;
    this.raceCountInputButton.disabled = true;
  }

  bindRestartEvent() {
    const restartButton = document.querySelector(".restart-button");
    restartButton.addEventListener("click", () => {
      this.restartRace();
    });
  }

  restartRace() {
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;
    this.racingCarsElement.innerHTML = "";
    this.racingArrowElement.innerHTML = "";
    this.racingResultElement.innerHTML = "";
    this.carNameInput.value = "";
    this.raceCountInput.value = "";
    this.carNameInputButton.disabled = false;
    this.raceCountInputButton.disabled = false;
    this.raceCountDisplay.style.visibility = "hidden";
  }
}

class Template {
  carArrow(eachcount) {
    return `<div class="racing-arrow-wrap">⬇️️</div>`.repeat(eachcount);
  }

  racingResult(winner) {
    return `
      <p class="racing-winner">🏆 최종 우승자: ${winner} 🏆</p>
      <br/>
      <div class='restart-button'>다시 시작하기</div>
    `;
  }
}

new RacingcarGame();
