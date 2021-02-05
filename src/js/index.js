import { handleCarNameInput } from './input/handleCarNameInput.js';

const init = () => {
  const $carNameSubmit = document.querySelector('#car-name-submit');

  $carNameSubmit.addEventListener('click', handleCarNameInput);
};

export default function RacingGame() {
  init();
}

window.onload = () => {
  new RacingGame();
};

// 경주 진행될 때 전진하는 차에 표시해줄 화살표 템플릿 <div class="forward-icon mt-2">⬇️️</div>
