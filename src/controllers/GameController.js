import Input from "../views/Input.js";
import Output from "../views/Output.js";
import RaceController from "./RaceController.js";
class GameController {
  async play() {
    const { carNames, tryCount } = await this.#getValidatedInputs();

    const raceController = new RaceController(carNames, tryCount);

    Output.printRaceStart();
    raceController.race();

    const winners = raceController.getWinners();
    Output.printWinner(winners);
  }

  async #getValidatedInputs() {
    const carNames = await Input.carNames();
    const tryCount = await Input.tryCount();

    return { carNames, tryCount };
  }
}

export default GameController;
