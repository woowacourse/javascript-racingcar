import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import RacingGame from '../domain/RacingGame/RacingGame.js';
import RandomMoveCountMaker from '../domain/RandomMoveCountMaker/RandomMoveCountMaker.js';
import RacingWinnerRecorder from '../domain/RacingWinnerRecorder/RacingWinnerRecorder.js';
import RetryHandler from '../errors/RetryHandler/RetryHandler.js';

const RacingGameController = Object.freeze({
  async run() {
    const { racingCarNames, tryCount } = await processUserInput();
    processRacingGame({ racingCarNames, tryCount });
  },
});

export default RacingGameController;

async function processUserInput() {
  const racingCarNames = await RetryHandler.errorWithLogging(() => InputView.readRacingCarNames());
  const tryCount = await RetryHandler.errorWithLogging(() => InputView.readTryCount());

  return { racingCarNames, tryCount };
}

function processRacingGame({ racingCarNames, tryCount }) {
  const racingGame = new RacingGame({ racingCarNames, tryCount });

  const randomMoveCounts = RandomMoveCountMaker.execute(tryCount, racingCarNames.length);
  const racingResult = racingGame.startRace(randomMoveCounts);

  const finalRacingResult = racingResult.at(-1);
  const racingWinners = RacingWinnerRecorder.createRacingWinners(finalRacingResult);

  OutputView.printRacingResult(racingResult);
  OutputView.printRacingWinners(racingWinners);
}
