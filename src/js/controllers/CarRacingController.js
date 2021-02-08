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
    const $carNamesSubmit = document.querySelector('#car-names-submit');
    const carNames = $carNamesInput.value.split(',').map((name) => name.trim());
    const carNamesSet = new Set(carNames);

    if (carNames.length !== carNamesSet.size) {
      return alert(alertConstants.DUPLICATE_CAR_NAME);
    }

    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length > 5 || carNames[i].length <= 0) {
        return alert(alertConstants.INVALID_CAR_NAME);
      }
    }

    carNames.forEach((carName) => this.model.addCars(carName));

    this.view.removeHidden($racingCountContainer);
    this.view.addDisabled($carNamesSubmit);
  }

  onClickRacingCountSubmit() {
    const $racingContainer = document.querySelector('.racing-container');
    const $racingCountInput = document.querySelector('#racing-count-input');
    const $racingCountSubmit = document.querySelector('#racing-count-submit');
    const racingCount = $racingCountInput.value;

    if (racingCount <= 0 || racingCount > racingConstants.MAX_RACING_COUNT) {
      alert(alertConstants.INVALID_RACING_COUNT);
      return;
    }

    this.model.racingCount = racingCount;

    this.view.removeHidden($racingContainer);
    this.view.renderRacingCars(this.model.cars);

    this.view.addDisabled($racingCountSubmit);
    this.startRacing();
  }

  onClickRestartButton() {
    const $racingCountContainer = document.querySelector('.racing-count-container');
    const $racingContainer = document.querySelector('.racing-container');
    const $resultContainer = document.querySelector('.result-container');
    const $carNamesInput = document.querySelector('#car-names-input');
    const $racingCountInput = document.querySelector('#racing-count-input');
    const $carNamesSubmit = document.querySelector('#car-names-submit');
    const $racingCountSubmit = document.querySelector('#racing-count-submit');

    this.model.init();
    this.view.addHidden($racingCountContainer);
    this.view.addHidden($racingContainer);
    this.view.addHidden($resultContainer);
    this.view.removeDisabled($carNamesSubmit);
    this.view.removeDisabled($racingCountSubmit);

    $carNamesInput.value = '';
    $racingCountInput.value = '';
  }

  moveCars(cars) {
    cars.forEach((car) => {
      this.model.moveCar(car);
    });
  }

  getMovedCars() {
    const movedCars = [];
    const { START_THRESHOLD_NUMBER } = racingConstants;

    this.model.cars.forEach((car) => {
      const { name } = car;
      const randomNumber = Math.floor(Math.random() * 10);

      if (randomNumber >= START_THRESHOLD_NUMBER) {
        movedCars.push(name);
      }
    });

    return movedCars;
  }

  startRacing() {
    for (let i = 0; i < this.model.racingCount; i++) {
      const movedCars = this.getMovedCars();
      this.moveCars(movedCars);
      this.view.renderRacingRoundResult(movedCars);
    }

    const $resultContainer = document.querySelector('.result-container');
    this.view.removeHidden($resultContainer);

    const winners = this.model.getWinners();
    this.view.renderRacingResult(winners);
  }

  setEventListener() {
    const $carNamesSubmit = document.querySelector('#car-names-submit');
    const $racingCountSubmit = document.querySelector('#racing-count-submit');
    const $restartButton = document.querySelector('#restart-button');

    $carNamesSubmit.addEventListener('click', this.onClickCarNamesSubmit.bind(this));
    $racingCountSubmit.addEventListener('click', this.onClickRacingCountSubmit.bind(this));
    $restartButton.addEventListener('click', this.onClickRestartButton.bind(this));
  }
}
