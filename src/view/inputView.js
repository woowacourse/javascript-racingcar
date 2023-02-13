const Console = require('../utils/Console');
const { errorHandler } = require('../utils');
const { GAME_MESSAGE, GAME_STRING } = require('../constants');
const validation = require('../domain/validation');

const inputView = {
  readCarName: (callback) => {
    Console.readLine(GAME_MESSAGE.askCarName, (nameInput) => {
      const carNames = nameInput.split(GAME_STRING.nameSplit);
      const isNormal = errorHandler(validation.carName, carNames);
      if (isNormal) return callback(carNames);
      return inputView.readCarName(callback);
    });
  },
  readAttempts: (callback) => {
    Console.readLine(GAME_MESSAGE.askAttempts, (attemptInput) => {
      const isNormal = errorHandler(validation.attempt, attemptInput);
      if (isNormal) return callback(attemptInput);
      return inputView.readAttempts(callback);
    });
  },
};

module.exports = inputView;
