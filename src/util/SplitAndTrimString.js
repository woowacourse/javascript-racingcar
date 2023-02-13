const { COMMA } = require("../constant/Constants");

const splitAndTrimString = (string) => {
  return string.split(COMMA).map((str) => str.trim());
};

module.exports = splitAndTrimString;
