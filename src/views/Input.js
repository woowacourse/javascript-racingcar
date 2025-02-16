import readline from "readline";

export default class Input {
  static SEPARATOR = ",";
  static INPUT_MESSAGE = {
    carName:
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
    tryNumber: "시도할 횟수는 몇 회인가요?\n",
  };

  static async carName() {
    const names = await this.readLineAsync(Input.INPUT_MESSAGE.carName);
    const parsedNames = names.split(Input.SEPARATOR);
    return parsedNames;
  }

  static async tryNumber() {
    const tryNumber = Number(
      await this.readLineAsync(Input.INPUT_MESSAGE.tryNumber)
    );
    return tryNumber;
  }

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
}
