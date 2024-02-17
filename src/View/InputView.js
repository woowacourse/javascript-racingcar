import readLine from "readline";
import { VIEW_MESSAGES } from "../Constants/Messages";
import { SYMBOL } from "../Constants/Constants";

const { PROMPT_CAR_NAMES, PROMPT_TRY } = VIEW_MESSAGES;
const { DIVIDE_SYMBOL } = SYMBOL;

const STD_OBJ = Object.freeze({
  input: process.stdin,
  output: process.stdout,
});

const InputView = {
  async readCars() {
    const carsName = await this.readLineAsync(PROMPT_CAR_NAMES);
    return carsName.split(DIVIDE_SYMBOL);
  },
  async readTry() {
    const tryNums = await this.readLineAsync(PROMPT_TRY);

    return Number(tryNums);
  },

  readLineAsync(prompt) {
    const rl = readLine.createInterface(STD_OBJ);
    return new Promise((resolve) => {
      rl.question(prompt, (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  },
};

export default InputView;
