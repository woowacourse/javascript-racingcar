import Game from '../domain/Game.js';
import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';

export default class Controller {
  async start() {
    let inputName, inputTryNumber;
    while (true) {
      try {
        inputName = await InputView.inputName();
        new Game(inputName, 1); // 검증을 위한 임시 값 1 입니다.
        break;
      } catch (error) {
        OutputView.printInput(error.message);
      }
    }
    while (true) {
      try {
        inputTryNumber = await InputView.inputTryNumber();
        new Game(inputName, inputTryNumber); // tryNumber 검증
        break;
      } catch (error) {
        OutputView.printInput(error.message);
      }
    }

    const game = new Game(inputName, inputTryNumber);
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
  catch(error) {
    OutputView.printInput(error.message);
  }
}
