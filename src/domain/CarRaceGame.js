const CarRaceResultRandomGenerator = require("./CarRaceResultRandomGenerator");

const CarRaceGame = {
  updateRace(carDistances) {
    const roundRaceResult = CarRaceResultRandomGenerator.generate(carDistances.length);
    for (let i = 0; i < carDistances.length; i++) {
      carDistances[i] += roundRaceResult[i];
    }
    return carDistances;
  },

  judgeWinners(carNames, carDistances) {
    const winners = [];
    const maxDistance = Math.max(...carDistances);
    for(let i = 0; i < carDistances.length; i++) {
      if(carDistances[i] === maxDistance) {
        winners.push(carNames[i]);
      }
    }
    return winners.join(', ');
  }
};

module.exports = CarRaceGame;
