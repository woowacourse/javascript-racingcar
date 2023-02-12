const Utils = require("../util/Utils");
const { GAME_MESSAGE } = require("../constant/Constants");
const { INPUT_CAR_NAME, INPUT_TRY_COUNT } = GAME_MESSAGE;

const InputView = {
  readCarName(callback) {
    Utils.readLine(INPUT_CAR_NAME, callback);
  },

  readTryCount(callback) {
    Utils.readLine(INPUT_TRY_COUNT, callback);
  },
};

module.exports = InputView;
