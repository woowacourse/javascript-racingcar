const { COMMA } = require("../Constants/Constants");

const splitAndTrimString = (string) => {
  return string.split(COMMA).map((str) => str.trim());
};

module.exports = splitAndTrimString;
