export default class CarRacingView {
  hide(element) {
    element.classList.add('hidden');
  }

  show(element) {
    element.classList.remove('hidden');
  }

  disableElement(element) {
    element.disabled = true;
  }

  enableElement(element) {
    element.disabled = false;
  }

  removeSpinner() {
    const $spinnerContainers = document.querySelectorAll('.spinner-container');

    $spinnerContainers.forEach(($spinnerContainer) => {
      $spinnerContainer.parentNode.remove();
    });
  }

  renderRacingRoundResult(movedCars) {
    const $carPlayers = document.querySelectorAll('.car-player');

    $carPlayers.forEach(($carPlayer) => {
      const carName = $carPlayer.innerText;

      if (movedCars.includes(carName)) {
        $carPlayer.insertAdjacentHTML('afterend', `<div class="forward-icon mt-2">⬇️️</div>`);
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
            <div class="d-flex justify-center mt-4">
              <div class="relative spinner-container">
                <span class="material spinner"></span>
              </div>
            </div>
          </div>
        `
      )
      .join('');
  }
}
