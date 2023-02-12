const { LESS_THAN_TEN } = require("../Constants/Constants");

const makeRandomNumber = () => {
  return Math.floor(Math.random() * LESS_THAN_TEN); // 0 ~ 9 사이의 정수
};

module.exports = makeRandomNumber;
