const CarRaceResultRandomGenerator = require("./CarRaceResultRandomGenerator");

const CarRaceGame = {
  updateRace(carDistances) {
    const newDistances = carDistances;
    const roundRaceResult = CarRaceResultRandomGenerator.generate(carDistances.length);
    for (let i = 0; i < carDistances.length; i += 1) {
      newDistances[i] += roundRaceResult[i];
    }
    return newDistances;
  },

  judgeWinners(carNames, carDistances) {
    const winners = [];
    const maxDistance = Math.max(...carDistances);
    for (let i = 0; i < carDistances.length; i += 1) {
      if (carDistances[i] === maxDistance) {
        winners.push(carNames[i]);
      }
    }
    return winners.join(", ");
  },
};

module.exports = CarRaceGame;
