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
        return;
      }
    });
    this.isCorrectCarName = true;
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
  }

  countCarsMove() {
    for (let i = 0; i < this.raceCount; i += 1) {
      this.carList.forEach((eachCar) => {
        eachCar.move();
      });
    }
  }

  showCarsMove() {
    const racingArrowElement = document.querySelector(".racing-arrow");
    this.carList
      .map((car) => this.template.carArrow(car.count))
      .map((arrowTemplate) => {
        const wrap = document.createElement("div");
        wrap.classList.add("racing-arrow-box");
        wrap.innerHTML = arrowTemplate;
        racingArrowElement.append(wrap);
      });
  }

  showCarBoxes() {
    const racingCarsElement = document.querySelector(".racing-cars");
    racingCarsElement.innerHTML = this.carList
      .map((car) => car.carNameTemplate)
      .join("");
  }
}

class Template {
  carArrow(eachcount) {
    return `<div class="racing-arrow-wrap">⬇️️</div>`.repeat(eachcount);
  }
}

new RacingcarGame();
