const { MOVEMENT_STANDARD_NUMBER } = require("./Utils/Constants");

const randomNumberMaker = () => {
  return Math.floor(Math.random() * 10);
};

const isOverFour = (number) => {
  if (number >= MOVEMENT_STANDARD_NUMBER) {
    return true;
  }
  return false;
};

const isMoving = () => {
  return isOverFour(randomNumberMaker());
};

module.exports = isMoving;
