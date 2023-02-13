const STRING_VALIDATOR_CONDITION = {
  UNIQUE_VALUES: (valuesLength, setSize) => valuesLength === setSize,
  VALID_SIZE: (valueSize, min, max) => valueSize >= min && valueSize <= max,
  VALID_RANGE: (value, min, max) => value >= min && value <= max,
  PASSED_FORMAT: (value, regExp) =>
    regExp instanceof RegExp && regExp.test(value),
};

module.exports = STRING_VALIDATOR_CONDITION;
