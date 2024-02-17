const converter = {
  seperateComma(inputValue) {
    return inputValue.split(',');
  },

  makeDashForNumber(number) {
    const totalDash = '';
    return totalDash.padEnd(number, '-');
  },
};

export default converter;
