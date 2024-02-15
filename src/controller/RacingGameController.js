import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import ErrorHandler from '../errors/ErrorHandler/module.js';
import RacingGame from '../domain/RacingGame/module.js';
import RandomMoveCountMaker from '../domain/RandomMoveCountMaker/module.js';
import RacingWinnerRecorder from '../domain/RacingWinnerRecorder/module.js';

const RacingGameController = Object.freeze({
  async run() {
    const { racingCarNames, tryCount } = await processUserInput();
    processRacingGame({ racingCarNames, tryCount });
  },
});

export default RacingGameController;

async function processUserInput() {
  const racingCarNames = await ErrorHandler.retryOnErrors(() => InputView.readRacingCarNames());
  const tryCount = await ErrorHandler.retryOnErrors(() => InputView.readTryCount());

  return { racingCarNames, tryCount };
}

function processRacingGame({ racingCarNames, tryCount }) {
  const randomMoveCounts = RandomMoveCountMaker.execute(tryCount, racingCarNames.length);
  const racingResult = RacingGame.startRace({ racingCarNames, tryCount, randomMoveCounts });

  const finalRacingResult = racingResult.at(-1);
  const racingWinners = RacingWinnerRecorder.createRacingWinners(finalRacingResult);

  OutputView.printRacingResult(racingResult);
  OutputView.printRacingWinners(racingWinners);
}
