import RacingGameController from "./class/RacingGameController.js";
import RacingGameModel from "./class/RacingGameModel.js";
import RacingGameView from "./Views/RacingGameView.js";
import RacingInputView from "./Views/RacingInputView.js";
import RacingResultView from "./Views/RacingResultView.js";

document.addEventListener("DOMContentLoaded", racingGame);

function racingGame() {
  const racingGameModel = new RacingGameModel();

  const views = {
    racingInputView: new RacingInputView(),
    racingGameView: new RacingGameView(),
    racingResultView: new RacingResultView(),
  }

  new RacingGameController(racingGameModel, views);
}
