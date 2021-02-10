class RacingCarController {
  constructor() {
    //this.model = new RacingCarModel();
    //this.view = new RacingCarView();
  }

  getCarsInput() {
    const $carInput = document.querySelector("#car-input");

    return $carInput.value.split(",");
  }

  getCountInput() {
    const $countInput = document.querySelector("#count-input");
    return $countInput.value;
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
    const randomNumber = generateRandomNumber();

    return randomNumber >= 4 ? 1 : 0;
  }

  play(cars) {
    const newCars = cars.map(car => {
      return { ...car, forward: forward + this.goStop() };
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
