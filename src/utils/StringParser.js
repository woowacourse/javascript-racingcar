import MESSAGE from "../constants/Message.js";

class StringParser {
  static splitCarNames(input) {
    const carNamesArray = input.split(",");

    const result = [];
    carNamesArray.forEach((carName) => {
      result.push(carName.trim());
    });

    return result;
  }

  static concatElements(array) {
    return array.join(MESSAGE.championSeparator);
  }
}

export default StringParser;
