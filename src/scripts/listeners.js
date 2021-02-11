import RacingCarGameController from "./RacingCarGame/RacingCarGameController.js";
import {
  $carNameSubmit,
  $playGameButton,
  $restartButton,
  $carNameInput,
  $tryCountInput,
} from "./elements.js";

export const addRacingCarGameListener = () => {
  const controller = new RacingCarGameController();

  $carNameSubmit.addEventListener("click", () =>
    controller.onCarNameSubmit($carNameInput.value)
  );
  $playGameButton.addEventListener("click", () =>
    controller.onClickPlayGameButton($tryCountInput.value)
  );
  $restartButton.addEventListener("click", controller.onRestartButtonClick);
};
