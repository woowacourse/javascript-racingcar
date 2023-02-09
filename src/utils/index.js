const { GAME_NUMBER } = require('../constants');
const Console = require('./Console');

const isMove = () => {
  return Math.random() * GAME_NUMBER.moveRange >= GAME_NUMBER.moveStandard;
};

const errorHandler = (validate, input) => {
  try {
    validate(input);
    return true;
  } catch ({ message }) {
    Console.print(message);
    return false;
  }
};

module.exports = { isMove, errorHandler };
