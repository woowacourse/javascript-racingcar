export default class CarRacingView {
  addHidden(element) {
    element.classList.add('hidden');
  }

  removeHidden(element) {
    element.classList.remove('hidden');
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
          <div>
            <div class="car-player mr-2">${car.name}</div>
          </div>
        `
      )
      .join('');
  }
}
