import { handleCarNameInput } from './input/handleCarNameInput.js';
import { handleRacingCountInput } from './input/handleRacingCountInput.js';

export default function RacingGame() {
  const $carNameSubmit = document.querySelector('#car-name-submit');
  const $racingCountSubmit = document.querySelector('#racing-count-submit');

  $carNameSubmit.addEventListener('click', handleCarNameInput);
  $racingCountSubmit.addEventListener('click', handleRacingCountInput);
}

new RacingGame();
