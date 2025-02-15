import Game from '../domain/Game.js';
import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';

export default class Controller {
  async start() {
    const game = new Game();
    const inputName = await InputView.inputName();
    const inputTryNumber = await InputView.inputTryNumber();

    game.createCarList(inputName);
    game.setInputTryNumber(inputTryNumber);

    const { winners, roundResults } = game.race();

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
}
