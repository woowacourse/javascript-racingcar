export default class CarRacingView {
  hide(element) {
    element.classList.add('hidden');
  }

  show(element) {
    element.classList.remove('hidden');
  }

  addDisabled(element) {
    element.disabled = true;
  }

  removeDisabled(element) {
    element.disabled = false;
  }

  renderRacingRoundResult(movedCars) {
    const $carPlayers = document.querySelectorAll('.car-player');

    $carPlayers.forEach((carPlayer) => {
      const carName = carPlayer.innerText;

      if (movedCars.includes(carName)) {
        carPlayer.parentNode.insertAdjacentHTML('beforeend', `<div class="forward-icon mt-2">⬇️️</div>`);
      }
    });
  }

  renderRacingResult(winners) {
    const $winnersList = document.querySelector('.winners-list');

    $winnersList.innerText = winners.map((winner) => winner.name).join(', ');
  }

  renderRacingCars(cars) {
    const $racingContainer = document.querySelector('.racing-container');

    $racingContainer.innerHTML = cars
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
