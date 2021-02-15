import RacingCarGameController from './RacingCarGame/RacingCarGameController.js';
import { $carNameInput, $tryCountInput } from './elements.js';

const onCarNameSubmit = () => {
  RacingCarGameController.registerCarNames($carNameInput.value);
};

const onClickPlayGameButton = () => {
  RacingCarGameController.playRacingCarGame($tryCountInput.value);
};

const onRestartButtonClick = () => {
  RacingCarGameController.restartRacingCarGame();
};

export { onCarNameSubmit, onClickPlayGameButton, onRestartButtonClick };
