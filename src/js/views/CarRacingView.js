export default class CarRacingView {
  constructor(model) {
    this.model = model;
  }

  removeHidden(element) {
    element.classList.remove('hidden');
  }

  renderRacingCars(cars) {
    const $racingContainer = document.querySelector('.racing-container');

    $racingContainer.innerHTML = cars
      .map(
        (car) => `
          <div>
            <div class="car-player mr-2">${car.name}</div>
          </div>
        `
      )
      .join('');
  }
}
