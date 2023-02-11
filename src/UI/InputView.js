const { GAME_MESSAGE, COMMA } = require("../Utils/Constants");
const Utils = require("../Utils/Utils");
const { hasError } = require("../Validator/ErrorHandler");
const {
  inputCarNameValidator,
  tryCountValidator,
} = require("../Validator/Validator");
const { INPUT_CAR_NAME, INPUT_TRY_COUNT } = GAME_MESSAGE;

const InputView = {
  async readCarName() {
    const carNames = await Utils.readLine(INPUT_CAR_NAME);
    const cars = carNames.split(COMMA).map((name) => name.trim());

    const isValidated = hasError(
      () => inputCarNameValidator(cars),
      InputView.readCarName,
    );
    if (isValidated) return;

    return cars;
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
