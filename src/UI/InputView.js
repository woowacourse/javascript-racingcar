const { readLine } = require("../Utils/MissionUtils");
const { INPUT_CAR_NAME } = require("../Utils/Constants");

const InputView = {
  carName(callback) {
    readLine(INPUT_CAR_NAME, callback);
  },
};
