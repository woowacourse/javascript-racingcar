import readLineAsync from "../util/readLine.js";

import INPUT from "../constant/input.js";

const InputView = {
  async readCarNames() {
    const input = await readLineAsync(INPUT.CAR_NAMES);

    return input;
  },
};

export default InputView;
