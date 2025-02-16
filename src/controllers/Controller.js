import Game from '../domain/Game.js';
import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';
import { Validator } from '../utils/Validator.js';
import DEFINITION from '../constants/Definition.js';

export default class Controller {
  async getValidateName() {
    while (true) {
      try {
        const inputName = await InputView.inputName();
        Validator.validateName(inputName, DEFINITION.MAX_NAME_LENGTH); // 클라 검증
        return inputName;
      } catch (error) {
        OutputView.printInput(error.message);
      }
    }
  }
  async getValidateTryNumber() {
    while (true) {
      try {
        const inputTryNumber = await InputView.inputTryNumber();
        Validator.validateTryNumber(inputTryNumber, DEFINITION.MIN_GAME, DEFINITION.MAX_GAME); // 클라 검증
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
    const inputTryNumber = await this.getValidateTryNumber();

    const game = new Game(inputName, inputTryNumber);
    const { winners, roundResults } = game.race();

    this.print(winners, roundResults);
  }
}
