const { readLine } = require("../Utils/MissionUtils");
const { GAME_MESSAGE } = require("../Utils/Constants");
const { INPUT_CAR_NAME, INPUT_TRY_COUNT } = GAME_MESSAGE;

const InputView = {
  readCarName(callback) {
    readLine(INPUT_CAR_NAME, callback);
  },
  readTryCount(callback) {
    readLine(INPUT_TRY_COUNT, callback);
  },
};

module.exports = InputView;
