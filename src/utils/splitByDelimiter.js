const { SYMBOL } = require('../constant/Conditions');

const splitByDelimiter = (input) => {
  return input.split(SYMBOL.delimiter).map((value) => value.trim());
};

module.exports = splitByDelimiter;
