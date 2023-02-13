const Converter = {
  numberToDash(number) {
    return '-'.repeat(number);
  },

  arrayToString(array, seperator) {
    return array.join(seperator);
  },

  carRoundResult(carRound) {
    const { name, position } = carRound;
    const positionScore = Converter.numberToDash(position);

    return `${name} : ${positionScore}`;
  },
};

module.exports = Converter;
