import RacingCarGameController from './RacingCarGame/RacingCarGameController.js';
import { $carNameInput, $tryCountInput } from './elements.js';

export const onCarNameSubmit = () => {
  RacingCarGameController.registerCarNames($carNameInput.value);
}

export const onClickPlayGameButton = () => {
  RacingCarGameController.playRacingCarGame($tryCountInput.value);
}

export default {
  onCarNameSubmit,
  onClickPlayGameButton,
}