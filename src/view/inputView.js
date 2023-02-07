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
          this.readCount();
        } catch (err) {
          console.log(err);
          this.readCarNames();
        }
      }
    );
  }

  readCount() {
    Console.readLine("시도할 회수는 몇회인가요?", (input) => {
      try {
        const trialCount = Number(input); //NaN

        if (isNaN(trialCount)) {
          throw new Error("숫자만 입력 가능합니다.");
        }
      } catch (err) {
        console.log(err);
        this.readCount();
      }
    });
  }
}

const inputView = new InputView();
inputView.readCarNames();
