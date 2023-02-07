const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.readLine(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
      (input) => {
        const carNames = input.split(",");
        const carMap = carNames.reduce((acc, cur) => {
          return acc.set(cur, 1);
        }, new Map());

        console.log(carMap);
      }
    );
  }
}

const app = new App();
app.play();
