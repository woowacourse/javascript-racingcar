import MESSAGE from "../constants/Message.js";

const StringParser = {
  splitCarNames: (input) => {
    return input.split(",").map((carName) => carName.trim());
  },

  concatElements: (array) => {
    return array.join(MESSAGE.championSeparator);
  },
};

export default StringParser;
