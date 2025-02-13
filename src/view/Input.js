import { INPUT_MESSAGE } from "../constants/message.js";

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
    const name = await this.readLineAsync(INPUT_MESSAGE.carName);
    return name;
  }

  static async tryCount() {
    const tryCount = await this.readLineAsync(INPUT_MESSAGE.tryCount);
    return tryCount;
  }
}
