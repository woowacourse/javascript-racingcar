export default class CarRacingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.setEventListener();
  }

  onClickCarNamesSubmit() {
    const $carNamesInput = document.querySelector('#car-names-input');
    const carNames = $carNamesInput.value.split(',').map((name) => name.trim());

    carNames.forEach((carName) => this.model.addCars(carName));
  }

  setEventListener() {
    const $carNamesSubmit = document.querySelector('#car-names-submit');

    $carNamesSubmit.addEventListener('click', this.onClickCarNamesSubmit.bind(this));
  }
}
