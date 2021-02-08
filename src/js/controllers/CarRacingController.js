import alertConstants from '../constants/alertConstants.js';
import racingConstants from '../constants/racingConstants.js';

export default class CarRacingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.setEventListener();
  }

  onClickCarNamesSubmit() {
    const $racingCountContainer = document.querySelector('.racing-count-container');
    const $carNamesInput = document.querySelector('#car-names-input');

    const carNames = $carNamesInput.value.split(',').map((name) => name.trim());

    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length > 5 || carNames[i].length <= 0) {
        alert(alertConstants.INVALID_CAR_NAME);
        return;
      }
    }

    carNames.forEach((carName) => this.model.addCars(carName));

    this.view.removeHidden($racingCountContainer);
  }

  onClickRacingCountSubmit() {
    const $racingContainer = document.querySelector('.racing-container');
    const $racingCountInput = document.querySelector('#racing-count-input');
    const racingCount = $racingCountInput.value;

    if (racingCount <= 0) {
      alert(alertConstants.INVALID_RACING_COUNT);
      return;
    }

    this.model.racingCount = racingCount;

    this.view.removeHidden($racingContainer);
    this.view.renderRacingCars(this.model.cars);

    this.startRacing();
  }

  startRacing() {
    const { START_THRESHOLD_NUMBER } = racingConstants;

    this.model.initCarsDistance();

    for (let i = 0; i < this.model.racingCount; i++) {
      const movedCars = [];

      this.model.cars.forEach((car) => {
        const { name } = car;
        const randomNumber = Math.floor(Math.random() * 10);

        if (randomNumber >= START_THRESHOLD_NUMBER) {
          this.model.moveCar(name);
          movedCars.push(name);
        }
      });

      this.view.renderRacingRoundResult(movedCars);
    }
    console.log(this.model.cars);
  }

  setEventListener() {
    const $carNamesSubmit = document.querySelector('#car-names-submit');
    const $racingCountSubmit = document.querySelector('#racing-count-submit');

    $carNamesSubmit.addEventListener('click', this.onClickCarNamesSubmit.bind(this));
    $racingCountSubmit.addEventListener('click', this.onClickRacingCountSubmit.bind(this));
  }
}
