import { GAME_MESSAGE, COMMA } from "../Utils/Constants.js";
import { splitStringAndTrim } from "../Utils/ConvenientFunctions.js";
import { utils } from "../Utils/Utils.js";

const { INPUT_CAR_NAME, INPUT_TRY_COUNT } = GAME_MESSAGE;

const InputView = {
  async readCarName() {
    const carNames = await utils.readLine(INPUT_CAR_NAME);
    const cars = splitStringAndTrim(carNames, COMMA);

    return cars;
  },
  async readTryCount() {
    const tryCount = await utils.readLine(INPUT_TRY_COUNT);

    return Number(tryCount);
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

export default InputView;
