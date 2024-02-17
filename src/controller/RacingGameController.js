import RetryHandler from '../errors/RetryHandler/RetryHandler.js';

import { RacingGame, RandomMoveCountMaker, RacingWinnerRecorder } from '../models/index.js';

import { InputView, OutputView } from '../views/index.js';

/**
 * @module RacingGameController
 * 사용자로부터 자동차 이름과 시도 횟수를 입력 받아 게임 실행 결과를 처리하여 출력하는 컨트롤러 모듈
 */
class RacingGameController {
  #racingWinnerRecorder = new RacingWinnerRecorder();

  /**
   * @returns {Promise<void>}
   */
  async run() {
    const { racingCarNames, tryCount } = await this.#processUserInput();

    this.#processRacingGame({ racingCarNames, tryCount });
  }

  /**
   * @returns {Promise<import('../types/jsDoc.js').UserInputDetails>} 사용자 입력 값을 포함한 객체를 반환하는 Promise
   */
  async #processUserInput() {
    const racingCarNames = await RetryHandler.errorWithLogging(() => InputView.readRacingCarNames());
    const tryCount = await RetryHandler.errorWithLogging(() => InputView.readTryCount());

    return { racingCarNames, tryCount };
  }

  /**
   * @param {import('../types/jsDoc.js').UserInputDetails} userInputDetails - 사용자가 입력한 자동차 이름과 시도 횟수가 담긴 객체
   * @returns {void}
   */
  #processRacingGame({ racingCarNames, tryCount }) {
    const racingGame = new RacingGame({ racingCarNames, tryCount });

    const randomMoveCounts = RandomMoveCountMaker.execute(tryCount, racingCarNames.length);
    const racingResult = racingGame.startRace(randomMoveCounts);

    const finalRacingResult = racingResult.at(-1);
    const racingWinners = this.#racingWinnerRecorder.createRacingWinners(finalRacingResult);

    OutputView.printRacingResult(racingResult);
    OutputView.printRacingWinners(racingWinners);
  }
}

export default RacingGameController;
