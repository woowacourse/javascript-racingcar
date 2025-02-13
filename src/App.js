import InputView from "./views/InputView.js";
import { INPUT_MESSAGE } from "./constants/Constants.js";
import parseInput from "./utils/parseInput.js";
import validateCarNameList from "./validation/validateCarNameList.js";
import validateAttemptCount from "./validation/validateAttemptCount.js";
import Race from "./domain/Race.js";

class App {
  async run() {
    const carInput = await InputView.readUserInput(INPUT_MESSAGE.CAR);
    const carNameList = parseInput.car(carInput);
    validateCarNameList(carNameList);

    const attemptInput = await InputView.readUserInput(INPUT_MESSAGE.ATTEMPT);
    const attemptCount = parseInput.attempt(attemptInput);
    validateAttemptCount(attemptCount);

    new Race(carNameList, attemptCount).play();
  }
}

export default App;
