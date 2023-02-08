const Random = {
  makeRandomNumbers(tryCount) {
    const race = [];
    while (tryCount) {
      const randomNumber = Math.floor(Math.random() * 9);
      randomNumber >= 4 ? race.push('-') : race.push('');
      tryCount -= 1;
    }
    return race;
  },
};

module.exports = Random;
