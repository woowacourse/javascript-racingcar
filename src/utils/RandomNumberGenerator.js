const { StaticValue } = require("../constants/Constants");

const RandomNumberGenerator = {
  generate() {
    return Math.floor(Math.random() * StaticValue.RANDOM_NUMBER_LIMIT);
  },
};

module.exports = RandomNumberGenerator;
