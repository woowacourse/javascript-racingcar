import gameUtils from '../utils/gameUtils';
import InputView from '../views/InputView';
import Car from '../models/Car';
import repeatFunctionUntilIsValid from '../utils/repeatFunctionUntilIsValid';
import Cars from '../collection/Cars';
import RoundCount from '../models/RoundCount';
import OutputView from '../views/OutputView';

const RacingGame = {
  async play() {
    const cars = await repeatFunctionUntilIsValid(this.setCarNames);
    const roundCount = await repeatFunctionUntilIsValid(this.setRoundCount);
    roundCount.raceStart(cars);
    OutputView.printRaceResult(roundCount.makeRaceResultOutput());
    OutputView.printWinners(roundCount.judgeWinners());
  },

  async setCarNames() {
    const inputValue = await InputView.readCarNames();
    const seperatedCarNames = gameUtils.seperateComma(inputValue);
    return new Cars(seperatedCarNames.map((carName) => new Car(carName)));
  },

  async setRoundCount() {
    const inputValue = await InputView.readRoundCount();
    return new RoundCount(inputValue);
  },
};

export default RacingGame;
