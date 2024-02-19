import InputView from '../view/InputView';
import Car from '../domain/Car';
import repeatFunctionUntilIsValid from '../utils/repeatFunctionUntilIsValid';
import Cars from '../collection/Cars';
import OutputView from '../view/OutputView';
import converter from '../utils/converter';
import Race from '../domain/Race';
import Validator from '../utils/Validator';

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
    seperatedCarNames.forEach((carName) => {
      RacingGame.validateCarName(carName);
    });
    return new Cars(seperatedCarNames.map((carName) => new Car(carName)));
  },

  validateCarName(carName) {
    Validator.isValidCarNameLengthRange(carName);
    Validator.isValidCarNameRule(carName);
  },

  async setRace() {
    const inputValue = await InputView.readRoundCount();
    RacingGame.validateRoundCount(inputValue);
    return new Race(Number(inputValue));
  },

  validateRoundCount(roundCount) {
    Validator.isValidRoundCountExist(roundCount);
    Validator.isValidRoundCountRule(roundCount);
    Validator.isValidRoundCountRange(roundCount);
  },
};

export default RacingGame;
