import handler from './handlers.js';
import { $carNameSubmit, $playGameButton } from './elements.js';

export const addRacingCarGameListener = () => {
  $carNameSubmit.addEventListener('click', handler.onCarNameSubmit);
  $playGameButton.addEventListener('click', handler.onClickPlayGameButton);
}

export default {
  addRacingCarGameListener
}