import RacingCarGameController from './RacingCarGame/RacingCarGameController.js';
import { $carNameInput } from './elements.js';

export const onCarNameSubmit = () => {
  RacingCarGameController.registerCarNames($carNameInput.value);
}

export default {
  onCarNameSubmit
}