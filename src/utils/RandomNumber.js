const { Settings } = require('../Config');

const RandomNumber = {
  generateRandomNumber() {
    return (
      Math.floor(
        Math.random() * (Settings.MAX_RANDOM_VALUE - Settings.MIN_RANDOM_VALUE)
      ) + Settings.MIN_RANDOM_VALUE
    );
  },
};

module.exports = RandomNumber;
