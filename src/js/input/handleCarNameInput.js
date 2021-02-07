const carTemplate = (carName) => {
  return `<div>
            <div class="car-player mr-2">${carName}</div>
          </div>`;
};

export const handleCarNameInput = () => {
  //const $carNameInput = document.querySelector('#car-name-input');
  const $racingCountSection = document.querySelector('#racing-count-section');

  // 유효성검사
  // 시도횟수 표시
  // 카네임 넣어주기
  $racingCountSection.removeAttribute('hidden');
  // const carNames = $carNameInput.value.split(',').map((car) => car.trim());
  // $gameProcessScreen.innerHTML = carNames
  //   .map((car) => carTemplate(car))
  //   .join('');
};
