import gameUtils from '../utils/gameUtils';
import InputView from '../views/InputView';
import Car from '../models/Car';
import repeatFunctionUntilIsValid from '../utils/repeatFunctionUntilIsValid';
import Cars from '../collection/Cars';
import RoundCount from '../models/RoundCount';

class RacingGame {
  async play() {
    await repeatFunctionUntilIsValid(this.setCarNames);
    await repeatFunctionUntilIsValid(this.setRoundCount);
    return this;
  }

  async setCarNames() {
    const inputValue = await InputView.readCarNames();
    const seperatedCarNames = gameUtils.seperateComma(inputValue);
    return new Cars(seperatedCarNames.map((carName) => new Car(carName)));
  }

  async setRoundCount() {
    const inputValue = await InputView.readRoundCount();
    return new RoundCount(inputValue);
  }
}

export default RacingGame;
