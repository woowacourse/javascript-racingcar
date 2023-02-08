const { GAME_MESSAGE, COMMA } = require("../Utils/Constants");
const Utils = require("../Utils/Utils");
const {
  inputCarNameValidator,
  tryCountValidator,
} = require("../Validator/Validator");
const { INPUT_CAR_NAME, INPUT_TRY_COUNT } = GAME_MESSAGE;

const InputView = {
  async readCarName() {
    const carNames = await Utils.readLine(INPUT_CAR_NAME);
    const cars = carNames.split(COMMA).map((name) => name.trim());

    inputCarNameValidator(cars);

    return cars;
  },
  async readTryCount() {
    const tryCount = await Utils.readLine(INPUT_TRY_COUNT);

    tryCountValidator(tryCount);

    return tryCount;
  },
  readTryCount(callback) {
    readLine(INPUT_TRY_COUNT, callback);
  },
};

module.exports = InputView;
