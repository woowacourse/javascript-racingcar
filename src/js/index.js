import { handleCarNameInput } from './input/handleCarNameInput.js';
import { handleRacingCountInput } from './input/handleRacingCountInput.js';

const init = () => {
  const $carNameSubmit = document.querySelector('#car-name-submit');
  const $racingCountSubmit = document.querySelector('#racing-count-submit');

  $carNameSubmit.addEventListener('click', handleCarNameInput);
  $racingCountSubmit.addEventListener('click', handleRacingCountInput);
};

export default function RacingGame() {
  init();
}

window.onload = () => {
  new RacingGame();
};
