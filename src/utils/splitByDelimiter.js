const CONDITIONS = require('../constant/Conditions.js');

const splitByDelimiter = (input) => {
  return input.split(CONDITIONS.delimiter).map((value) => value.trim());
};

module.exports = splitByDelimiter;
