const gameUtils = {
  seperateComma(inputValue) {
    return inputValue.split(',');
  },

  makeDashForNumber(number) {
    const totalDash = '';
    return totalDash.padEnd(number, '-');
  },

  pickRandomNumber() {
    const START = 0;
    const END = 10;
    const randomNumber = Math.floor(START + Math.random() * END);
    return randomNumber;
  }
};

export default gameUtils;
