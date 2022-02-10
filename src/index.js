class RacingcarGame {
  constructor() {
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
    });
    this.raceCountForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.checkRaceNumber();
    });
  }

  checkCarName() {
    const carName = this.carNameInput.value.split(",");
    carName.forEach((name) => {
      if (name.length > 5) {
        alert("차 이름은 5자 이하만 가능합니다.");
        return;
      }
    });
  }

  checkRaceNumber() {
    const raceNumber = this.raceCountInput.value;
    if (raceNumber === "") {
      alert("몇 번의 이동을 할 것인지를 입력해주세요.");
      return;
    }
  }
}

new RacingcarGame();
