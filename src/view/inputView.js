const { Console } = require("@woowacourse/mission-utils");

class InputView {
  readCarNames() {
    Console.readLine(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
      (input) => {
        try {
          const carNames = input.split(",");
          for (const car of carNames) {
            if (car.length > 5)
              throw new Error("자동차 이름이 5글자가 넘어용 🥲");
          }
          const carMap = carNames.reduce((acc, cur) => {
            return acc.set(cur, 1);
          }, new Map());
        } catch (err) {
          console.log(err);
          inputView.readCarNames();
        }
      }
    );
  }
}

const inputView = new InputView();
inputView.readCarNames();
