import Cars from '../Cars/Cars.js';

const RacingGame = Object.freeze({
  startRace({ racingCarNames, tryCount, randomMoveCounts }) {
    const cars = new Cars(racingCarNames);

    const racingResult = Array.from({ length: tryCount }, (_, index) => cars.moveCars(randomMoveCounts[index]));

    return racingResult;
  },
});

export default RacingGame;
