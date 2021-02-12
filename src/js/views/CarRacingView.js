import { $, $all, isButton } from '../utils/index.js';

export default class CarRacingView {
  hide(element) {
    element.classList.add('hidden');
  }

  show(element) {
    element.classList.remove('hidden');
  }

  disableButton(element) {
    if (!isButton(element)) return;
    element.disabled = true;
  }

  enableButton(element) {
    if (!isButton(element)) return;
    element.disabled = false;
  }

  renderRacingRoundResult(movedCars) {
    $all('.car-player').forEach((carPlayer) => {
      const carName = carPlayer.innerText;

      if (movedCars.map((car) => car.name).includes(carName)) {
        carPlayer.parentNode.insertAdjacentHTML('beforeend', `<div class="forward-icon mt-2">⬇️️</div>`);
      }
    });
  }

  renderRacingResult(winners) {
    $('.winners-list').innerText = winners.map((winner) => winner.name).join(', ');
  }

  renderRacingCars(cars) {
    $('.racing-container').innerHTML = cars
      .map(
        (car) => `
          <div class="car-container">
            <div class="car-player mr-2">${car.name}</div>
          </div>
        `
      )
      .join('');
  }
}
