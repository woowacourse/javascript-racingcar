import { VALIDATOR } from '../utils/constant.js';

const carTemplate = (carName) => {
  return `<div dataset-forward-count=0 >
            <div class="car-player mr-2">${carName}</div>
          </div>`;
};

export const handleCarNameInput = () => {
  const $carNameInput = document.querySelector('#car-name-input');
  const $racingCountSection = document.querySelector('#racing-count-section');

  // 유효성검사
  const carNames = $carNameInput.value.split(',').map((car) => car.trim());

  if (
    !carNames.every((carName) => carName.length <= VALIDATOR.MAX_NAME_LENGTH)
  ) {
    $carNameInput.value = '';
    return alert('이름은 5글자 이하로 입력해 주세요.');
  }

  if (
    !carNames.every((carName) => carName.length >= VALIDATOR.MIN_NAME_LENGTH)
  ) {
    $carNameInput.value = '';
    return alert('공백만으로는 이름을 구성할 수 없습니다.');
  }

  $racingCountSection.removeAttribute('hidden');
};

// 시도횟수 표시
// 카네임 넣어주기
// $gameProcessScreen.innerHTML = carNames
//   .map((car) => carTemplate(car))
//   .join('');
