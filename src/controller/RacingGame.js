import InputView from '../views/InputView';
import Car from '../models/Car';
import repeatFunctionUntilIsValid from '../utils/repeatFunctionUntilIsValid';
import Cars from '../collection/Cars';
import OutputView from '../views/OutputView';
import converter from '../utils/converter';
import Race from '../models/Race';

const RacingGame = {
  async play() {
    const cars = await repeatFunctionUntilIsValid(this.setCarNames);
    const race = await repeatFunctionUntilIsValid(this.setRace);
    race.start(cars);
    OutputView.printRaceResult(race.makeRaceResultOutput());
    OutputView.printWinners(race.judgeWinners());
  },

  async setCarNames() {
    const inputValue = await InputView.readCarNames();
    const seperatedCarNames = converter.seperateComma(inputValue);
    return new Cars(seperatedCarNames.map((carName) => new Car(carName)));
  },

  async setRace() {
    const inputValue = await InputView.readRoundCount();
    return new Race(inputValue);
  },
};

export default RacingGame;
