import InputView from '../views/InputView.js';
import ErrorHandler from '../errors/ErrorHandler/module.js';

const RacingGameController = Object.freeze({
  async run() {
    await processUserInput();
  },
});

export default RacingGameController;

/**
 *
 */
async function processUserInput() {
  const racingCarNames = await ErrorHandler.retryOnErrors(() => InputView.readRacingCarNames());

  console.log(racingCarNames);
}
