const { GAME_MESSAGE, COMMA } = require("../Utils/Constants");
const { splitStringAndTrim } = require("../Utils/ConvenientFunctions");
const Utils = require("../Utils/Utils");

const { INPUT_CAR_NAME, INPUT_TRY_COUNT } = GAME_MESSAGE;

const InputView = {
  async readCarName() {
    const carNames = await Utils.readLine(INPUT_CAR_NAME);
    const cars = splitStringAndTrim(carNames, COMMA);

    return cars;
  },
  async readTryCount() {
    const tryCount = await Utils.readLine(INPUT_TRY_COUNT);

    return tryCount;
  },
  async readTryCount() {
    const tryCount = await Utils.readLine(INPUT_TRY_COUNT);

    const isValidated = hasError(
      () => tryCountValidator(tryCount),
      InputView.readTryCount,
    );
    if (isValidated) return;

    return tryCount;
  },
};

module.exports = InputView;
