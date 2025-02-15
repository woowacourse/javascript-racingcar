import Input from "../views/Input.js";
import Output from "../views/Output.js";
import RaceController from "./RaceController.js";
class GameController {
  async play() {
    const { names, tryCount } = await this.#readAndValidateInputs();

    const raceController = new RaceController(names, tryCount);

    Output.printRaceStart();
    raceController.race();

    const winners = raceController.getWinners();
    Output.printWinner(winners);
  }

  async #readAndValidateInputs() {
    const names = await Input.carName();
    const tryCount = await Input.tryCount();

    return { names, tryCount };
  }
}

export default GameController;
