export const OutputView = {
  printRound() {
    console.log("실행 결과");
  },
  printMessage(message) {
    console.log(message);
  },
  printError(parser, input) {
    let parsedValue;
    try {
      parsedValue = parser(input);
    } catch (error) {
      console.error(error.message);
    }
    return parsedValue;
  },
};
