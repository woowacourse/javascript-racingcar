import readLineAsync from "../util/readLine.js";

import INPUT from "../constant/input.js";

const InputView = {
  async readCarNames() {
    const input = await readLineAsync(INPUT.CAR_NAMES);

    return input;
  },

  async readRaceCount() {
    const input = await readLineAsync(INPUT.RACE_COUNT);

    return input;
  },
};

export default InputView;
