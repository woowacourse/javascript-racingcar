import Random from '../../utils/random.js';
import Cars from '../Cars/module.js';

const RacingGame = Object.freeze({
  startRace({ racingCarNames, tryCount }) {
    const cars = new Cars(racingCarNames);

    const racingResult = Array.from({ length: tryCount }, () => {
      // TODO: 하드 코딩 된 상수 값 나중에 고민해보기
      const randomMoveCounts = Random.pickUniqueNumbersInRange(0, 9, racingCarNames.length);
      return cars.moveCars(randomMoveCounts);
    });

    return racingResult;
  },
});

export default RacingGame;
