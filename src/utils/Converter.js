const Converter = {
  numberToDash(number) {
    return '-'.repeat(number);
  },

  arrayToString(array, seperator) {
    return array.join(seperator);
  },
};

export default Converter;
