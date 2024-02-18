import { Car, Race } from '../domain';
import { InputView, OutputView } from '../views';
import Cars from '../collection/Cars';

import { gameUtils, repeatFunctionUntilIsValid } from '../utils';

const RacingGame = {
  async play() {
    const cars = await repeatFunctionUntilIsValid(this.setCarNames);
    const race = await repeatFunctionUntilIsValid(this.setRoundCount);
    race.raceStart(cars);
    OutputView.printRaceResult(race.makeRaceResultOutput());
    OutputView.printWinners(race.judgeWinners());
  },

  async setCarNames() {
    const inputValue = await InputView.readCarNames();
    const seperatedCarNames = gameUtils.seperateComma(inputValue);
    return new Cars(seperatedCarNames.map((carName) => new Car(carName)));
  },

  async setRoundCount() {
    const inputValue = await InputView.readRoundCount();
    return new Race(inputValue);
  },
};

export default RacingGame;
