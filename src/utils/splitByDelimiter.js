const splitByDelimiter = (input, delimiter = '') => {
  return input.split(delimiter).map((value) => value.trim());
};

module.exports = splitByDelimiter;
