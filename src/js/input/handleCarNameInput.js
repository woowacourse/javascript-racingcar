const carTemplate = (carName) => {
  return `<div>
            <div class="car-player mr-2">${carName}</div>
          </div>`;
};

export const handleCarNameInput = () => {
  const $carNameInput = document.querySelector('#car-name-input');
  const $gameProcessScreen = document.querySelector('#game-process-screen');

  const carNames = $carNameInput.value.split(',').map((car) => car.trim());
  $gameProcessScreen.innerHTML = carNames
    .map((car) => carTemplate(car))
    .join('');
};
