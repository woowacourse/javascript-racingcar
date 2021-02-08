import handler from './handlers.js';
import { $carNameSubmit, $playGameButton, $restartButton } from './elements.js';

export const addRacingCarGameListener = () => {
  $carNameSubmit.addEventListener('click', handler.onCarNameSubmit);
  $playGameButton.addEventListener('click', handler.onClickPlayGameButton);
  $restartButton.addEventListener('click', handler.onRestartButtonClick);
};

export default {
  addRacingCarGameListener,
};
