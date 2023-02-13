const Console = require('./Console');
const { GAME_NUMBER } = require('../constants');

const isMove = (number) => {
  return number >= GAME_NUMBER.moveStandard;
};

class Random {
  static calculateRandomNumber = () => {
    return Math.random() * GAME_NUMBER.moveRange;
  };
}

const errorHandler = (validate, input) => {
  try {
    validate(input);
    return true;
  } catch ({ message }) {
    Console.print(message);
    return false;
  }
};

module.exports = { Random, errorHandler, isMove };
