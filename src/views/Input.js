import { INPUT_MESSAGE, ERROR_MESSAGE } from "../constants/message.js";

import readline from "readline";

export default class Input {
  static readLineAsync(query) {
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

  static async carName() {
    const names = await this.readLineAsync(INPUT_MESSAGE.carName);
    const parsedNames = names.split(",");
    this.#validateCarCount(parsedNames);
    this.#validateDuplicateCarName(parsedNames);
    return parsedNames;
  }

  static #validateCarCount(names) {
    if (names.length < 2 || names.length > 100) {
      throw new Error("자동차 갯수는 최소 2개 이상, 100이하 이어야 합니다.");
    }
  }

  static #validateDuplicateCarName(names) {
    if (new Set(names).size !== names.length) {
      throw new Error(ERROR_MESSAGE.duplicateCarName);
    }
  }

  static async tryNumber() {
    const tryNumber = Number(await this.readLineAsync(INPUT_MESSAGE.tryNumber));
    this.#validateTryNumberSize(tryNumber);
    this.#validateTryNumberPositiveInteger(tryNumber);
    return tryNumber;
  }

  static #validateTryNumberSize(tryNumber) {
    if (tryNumber < 2 || tryNumber > 100) {
      throw new Error("시도 횟수는 2개 이상, 100 이하 이어야 합니다.");
    }
  }

  static #validateTryNumberPositiveInteger(tryNumber) {
    if (!Number.isInteger(tryNumber)) {
      throw new Error("시도 횟수는 양의 정수여야 합니다.");
    }
  }
}
