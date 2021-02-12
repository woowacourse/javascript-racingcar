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

    this.view.show($('.racing-count-container'));
    this.view.disableButton($('#car-names-submit'));
  }

  onClickRacingCountSubmit() {
    const racingCount = $('#racing-count-input').value;

    if (racingCount <= 0 || racingCount > racingConstants.MAX_RACING_COUNT) {
      alert(alertConstants.INVALID_RACING_COUNT);
      return;
    }

    this.model.racingCount = racingCount;

    this.view.show($('.racing-container'));
    this.view.renderRacingCars(this.model.cars);

    this.view.disableButton($('#racing-count-submit'));
    this.startRacing();
  }

  onClickRestartButton() {
    this.model.init();
    this.view.hide($('.racing-count-container'));
    this.view.hide($('.racing-container'));
    this.view.hide($('.result-container'));
    this.view.enableButton($('#car-names-submit'));
    this.view.enableButton($('#racing-count-submit'));

    $('#car-names-input').value = '';
    $('#racing-count-input').value = '';
  }

  moveCars(cars) {
    cars.forEach((car) => {
      this.model.moveCar(car.name);
    });
  }

  getMovedCars() {
    const { START_THRESHOLD_NUMBER } = racingConstants;

    return this.model.cars.filter(() => {
      const randomNumber = Math.floor(Math.random() * 10);

      return randomNumber >= START_THRESHOLD_NUMBER;
    });
  }

  startRacing() {
    for (let i = 0; i < this.model.racingCount; i++) {
      const movedCars = this.getMovedCars();
      this.moveCars(movedCars);
      this.view.renderRacingRoundResult(movedCars);
    }

    this.view.show($('.result-container'));

    const winners = this.model.getWinners();
    this.view.renderRacingResult(winners);
  }

  setEventListener() {
    $('#car-names-submit').addEventListener('click', this.onClickCarNamesSubmit.bind(this));
    $('#racing-count-submit').addEventListener('click', this.onClickRacingCountSubmit.bind(this));
    $('#restart-button').addEventListener('click', this.onClickRestartButton.bind(this));
  }
}
