import MESSAGE from "../constants/Message.js";

const StringParser = {
  splitCarNames: (input) => {
    return input.split(",").map((carName) => carName.trim());
    //.filter((name) => name !== ""); // // 공백으로만 이루어진 이름은 불허
  },

  concatElements: (array) => {
    return array.join(MESSAGE.championSeparator);
  },
};

export default StringParser;
