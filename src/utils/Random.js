const Random = {
  makeRandomNumbers(tryCount) {
    const race = [];
    while (tryCount) {
      const randomNumber = Math.floor(Math.random() * 9);
      race.push(randomNumber);
      tryCount -= 1;
    }
    return race;
  },
};

module.exports = Random;
