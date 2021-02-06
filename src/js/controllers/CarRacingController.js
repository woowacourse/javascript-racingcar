import alertConstants from '../constants/alertConstants.js';
export default class CarRacingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.setEventListener();
  }

  onClickCarNamesSubmit() {
    const $carNamesInput = document.querySelector('#car-names-input');
    const carNames = $carNamesInput.value.split(',').map((name) => name.trim());

    carNames.forEach((carName) => {
      if (carName.length > 5) {
        alert(alertConstants.MAXIMUM_LENGTH_EXCEEDED);
        return;
      }
    });

    carNames.forEach((carName) => this.model.addCars(carName));
  }

  onClickRacingCountSubmit() {
    const $racingCountInput = document.querySelector('#racing-count-input');
    const racingCount = $racingCountInput.value;

    if (racingCount <= 0) {
      alert(alertConstants.INVALID_RACING_COUNT);
      return;
    }

    this.model.racingCount = racingCount;
  }

  setEventListener() {
    const $carNamesSubmit = document.querySelector('#car-names-submit');
    const $racingCountSubmit = document.querySelector('#racing-count-submit');

    $carNamesSubmit.addEventListener('click', this.onClickCarNamesSubmit.bind(this));
    $racingCountSubmit.addEventListener('click', this.onClickRacingCountSubmit.bind(this));
  }
}
