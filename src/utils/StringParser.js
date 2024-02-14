class StringParser {
  static splitCarNames(input) {
    const carNamesArray = input.split(",");

    const result = [];
    carNamesArray.forEach((carName) => {
      result.push(carName.trim());
    });

    return result;
  }
}

export default StringParser;
