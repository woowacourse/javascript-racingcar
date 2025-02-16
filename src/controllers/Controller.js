import Game from '../domain/Game.js';
import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';

export default class Controller {
  async getValidateName() {
    while (true) {
      try {
        const inputName = await InputView.inputName();
        new Game(inputName, 1); // 검증을 위한 임시 값 1 입니다.
        return inputName;
      } catch (error) {
        OutputView.printInput(error.message);
      }
    }
  }
  async getValidateTryNumber(inputName) {
    while (true) {
      try {
        const inputTryNumber = await InputView.inputTryNumber();
        new Game(inputName, inputTryNumber); // tryNumber 검증
        return inputTryNumber;
      } catch (error) {
        OutputView.printInput(error.message);
      }
    }
  }

  print(winners, roundResults) {
    // 결과 출력
    OutputView.printInput(`\n실행결과`);
    roundResults.forEach(round => {
      round.forEach(car => {
        OutputView.roundResult(car.name, car.position);
      });
      OutputView.printInput('');
    });
    OutputView.gameResult(winners);
  }

  async start() {
    const inputName = await this.getValidateName();
    const inputTryNumber = await this.getValidateTryNumber(inputName);

    const game = new Game(inputName, inputTryNumber);
    const { winners, roundResults } = game.race();

    this.print(winners, roundResults);
  }
}
