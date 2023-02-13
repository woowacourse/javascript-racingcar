const Validator = {
  isInteger(value) {
    return Number.isInteger(+value);
  },

  isDuplicate(array) {
    return new Set(array).size !== array.length;
  },
};

module.exports = Validator;
