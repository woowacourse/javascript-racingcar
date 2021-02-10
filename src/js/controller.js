class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
  }

  getCarsInput() {
    const $carInput = document.querySelector("#car-input");

    return $carInput.value.split(",");
  }

  getCountInput() {
    const $countInput = document.querySelector("#count-input");
    return $countInput.value;
  }

  getWinners() {}

  goStop() {
    // 랜덤수 가져와서 전진 or 스톱 값
    // return T/F
  }

  startGame() {
    // 자동 횟수만큼 반복
    //// goStop cars 객체에 저장(+= 1)
  }

  manageCars() {
    const carNames = this.getCarsInput();
    if (isCarValid(carNames)) {
      const cars = carNames.map(carName => {
        return { name: carName, forward: 0 };
      });

      this.model.setCars(cars);
      this.view.renderCount();
    }
  }

  manageCount() {
    const count = this.getCountInput();
    if (isCountValid(count)) {
      this.model.setCount(parseInt(count, 10));
      this.startGame();
      this.view.renderProcess(this.model.getCars());
      this.showResult();
    }
  }

  manageResult() {
    const winners = this.getWinners();
    this.view.renderResult(winners);
  }

  reset() {}

  handleCars() {
    const $carBtn = document.querySelector("#car-btn");
    $carBtn.addEventListener("click", this.manageCars);
  }

  handleCount() {
    const $countBtn = document.querySelector("#count-btn");
    $countBtn.addEventListener("click", this.manageCount);
  }

  handleReset() {
    const $resetBtn = document.querySelector("#reset-btn");
    $resetBtn.addEventListener("click", this.reset);
  }
}
