import InputView from "../views/InputView.js";
import { INPUT_MESSAGE } from "../constants/Constants.js";
import validateCarNameList from "../validation/validateCarNameList.js";
import validateAttemptCount from "../validation/validateAttemptCount.js";
import OutputView from "../views/OutputView.js";
import InputParser from "./InputParser.js";

const getInput = async (message, parseFunction, validateFunction) => {
  while (true) {
    try {
      const userInput = await InputView.readUserInput(message);
      const parsedInput = parseFunction(userInput);
      validateFunction(parsedInput);
      return parsedInput;
    } catch (e) {
      OutputView.print(e.message);
    }
  }
};

const InputHandler = {
  getCarNameList() {
    return getInput(INPUT_MESSAGE.CAR, InputParser.car, validateCarNameList);
  },
  getAttemptCount() {
    return getInput(INPUT_MESSAGE.ATTEMPT, InputParser.attempt, validateAttemptCount);
  },
};

export default InputHandler;

