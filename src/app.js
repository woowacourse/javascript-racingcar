import readLineAsync from "./readLine.js";

class App {
  async getCarNameInput() {
    const input = await readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n"
    );
    return input;
  }

  async getGameCount() {
    const input = await readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return input;
  }

  async run() {
    const carNames = await this.getCarNameInput();
    const cars = carNames.split(",");
    const gameCount = await this.getGameCount();
  }
}

export default App;
