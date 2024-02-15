import InputView from '../views/InputView.js';
import ErrorHandler from '../errors/ErrorHandler/module.js';
import RacingGame from '../domain/RacingGame/module.js';

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
  const racingResult = RacingGame.startRace({ racingCarNames, tryCount });
  console.log(racingResult);
}
