import InputView from "../views/InputView.js";
import { INPUT_MESSAGE } from "../constants/Constants.js";
import parseInput from "../utils/parseInput.js";
import validateCarNameList from "../validation/validateCarNameList.js";
import validateAttemptCount from "../validation/validateAttemptCount.js";
import OutputView from "../views/OutputView.js";

const InputHandler = {
  async getCarNameList() {
    while (true) {
      try {
        const carInput = await InputView.readUserInput(INPUT_MESSAGE.CAR);
        const carNameList = parseInput.car(carInput);
        validateCarNameList(carNameList);
        return carNameList;
      } catch (e) {
        OutputView.print(e.message);
      }
    }
  },
  async getAttemptCount() {
    while (true) {
      try {
        const attemptInput = await InputView.readUserInput(INPUT_MESSAGE.ATTEMPT);
        const attemptCount = parseInput.attempt(attemptInput);
        validateAttemptCount(attemptCount);
        return attemptCount;
      } catch (e) {
        OutputView.print(e.message);
      }
    }
  },
};

export default InputHandler;
