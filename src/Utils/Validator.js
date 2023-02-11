const Validator = {
  isNumeric(value) {
    return /^-?\d+$/.test(value);
  },

  isDuplicate(array) {
    return new Set(array).size !== array.length;
  },
};

module.exports = Validator;
