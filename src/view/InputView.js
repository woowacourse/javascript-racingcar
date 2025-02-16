import readline from "readline";
import { INPUT_MESSAGE } from "../constants/constants.js";
import { validateCarNames, validateTryCount } from "../utils/validation.js";

export default class InputView {
  readLineAsync(query) {
    return new Promise((resolve, reject) => {
      if (arguments.length !== 1) {
        reject(new Error("arguments must be 1"));
      }

      if (typeof query !== "string") {
        reject(new Error("query must be string"));
      }

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(query, (input) => {
        rl.close();
        resolve(input);
      });
    });
  }

  async readCarNames() {
    return await this.validateAndRetry(
      INPUT_MESSAGE.CAR_NAMES,
      validateCarNames,
    );
  }

  async readTryCount() {
    return await this.validateAndRetry(
      INPUT_MESSAGE.TRY_COUNT,
      validateTryCount,
    );
  }

  async validateAndRetry(message, validateFn) {
    try {
      const input = await this.readLineAsync(message);
      validateFn(input);
      return input;
    } catch (e) {
      console.log(e.message);
      return this.validateAndRetry(message, validateFn);
    }
  }
}
