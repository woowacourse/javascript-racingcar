const CarRaceResultRandomGenerator = require("./CarRaceResultRandomGenerator");

const CarRaceGame = {
  updateRace(carDistances) {
    const roundRaceResult = CarRaceResultRandomGenerator.generate(carDistances.length);
    for (let i = 0; i < carDistances.length; i++) {
      carDistances[i] += roundRaceResult[i];
    }
    return carDistances;
  },
};

module.exports = CarRaceGame;
