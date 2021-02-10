import { $ } from '../utils/index.js';
import alertConstants from '../constants/alertConstants.js';
import racingConstants from '../constants/racingConstants.js';

export default class CarRacingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.setEventListener();
  }

  onClickCarNamesSubmit() {
    const carNames = $('#car-names-input')
      .value.split(',')
      .map((name) => name.trim());
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

    this.view.removeHidden($('.racing-count-container'));
    this.view.addDisabled($('#car-names-submit'));
  }

  onClickRacingCountSubmit() {
    const racingCount = $('#racing-count-input').value;

    if (racingCount <= 0 || racingCount > racingConstants.MAX_RACING_COUNT) {
      alert(alertConstants.INVALID_RACING_COUNT);
      return;
    }

    this.model.racingCount = racingCount;

    this.view.removeHidden($('.racing-container'));
    this.view.renderRacingCars(this.model.cars);

    this.view.addDisabled($('#racing-count-submit'));
    this.startRacing();
  }

  onClickRestartButton() {
    this.model.init();
    this.view.addHidden($('.racing-count-container'));
    this.view.addHidden($('.racing-container'));
    this.view.addHidden($('.result-container'));
    this.view.removeDisabled($('#car-names-input'));
    this.view.removeDisabled($('#racing-count-submit'));

    $('#car-names-input').value = '';
    $('#racing-count-input').value = '';
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

    this.view.removeHidden($('.result-container'));

    const winners = this.model.getWinners();
    this.view.renderRacingResult(winners);
  }

  setEventListener() {
    $('#car-names-submit').addEventListener('click', this.onClickCarNamesSubmit.bind(this));
    $('#racing-count-submit').addEventListener('click', this.onClickRacingCountSubmit.bind(this));
    $('#restart-button').addEventListener('click', this.onClickRestartButton.bind(this));
  }
}
