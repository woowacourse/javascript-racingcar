const CarRaceResultRandomGenerator = require("./CarRaceResultRandomGenerator");

const CarRaceGame = {
  updateRace(carDistances) {
    const newDistances = carDistances;
    const roundRaceResult = CarRaceResultRandomGenerator.generate(carDistances.length);

    roundRaceResult.forEach((increaseDistance, index) => {
      newDistances[index] += increaseDistance;
    });

    return newDistances;
  },

  getWinners(carNames, carDistances) {
    const winners = [];
    const maxDistance = Math.max(...carDistances);

    for (let i = 0; i < carDistances.length; i += 1) {
      if (carDistances[i] === maxDistance) {
        winners.push(carNames[i]);
      }
    }

    return winners;
  },
};

module.exports = CarRaceGame;
