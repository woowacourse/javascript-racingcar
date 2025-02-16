import Input from "../views/Input.js";
import Output from "../views/Output.js";
import RaceController from "./RaceController.js";
import validateCarNames from "../validations/validateCarNames.js";
import getValidInput from "../utils/getValidInput.js";
import validateTryCount from "../validations/validateTryCount.js";

class GameController {
  async play() {
    const { carNames, tryCount } = await this.#getValidatedInputs();

    const raceController = new RaceController(carNames, tryCount);

    Output.printRaceStart();
    raceController.race();

    const winners = raceController.getWinners();
    Output.printWinners(winners);
  }

  async #getValidatedInputs() {
    const carNames = await getValidInput(Input.carNames, validateCarNames);
    const tryCount = await getValidInput(Input.tryCount, validateTryCount);

    return { carNames, tryCount };
  }
}

export default GameController;
