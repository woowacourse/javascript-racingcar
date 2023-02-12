const { MOVEMENT_STANDARD_NUMBER } = require("../Utils/Constants");

const randomNumberMaker = () => {
  return Math.floor(Math.random() * 10);
};

const isEqualOrGreaterThanStandardNumber = (number) => {
  if (number >= MOVEMENT_STANDARD_NUMBER) {
    return true;
  }
  return false;
};

const isMoving = (randomNumber) => {
  return isEqualOrGreaterThanStandardNumber(randomNumber);
};

const splitStringAndTrim = (string, splitChar) => {
  return string.split(splitChar).map((element) => element.trim());
};

module.exports = { isMoving, randomNumberMaker, splitStringAndTrim };
