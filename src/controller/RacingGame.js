import gameUtils from '../utils/gameUtils';
import InputView from '../views/InputView';
import Car from '../models/Car';
import repeatFunctionUntilIsValid from '../utils/repeatFunctionUntilIsValid';

class RacingGame {
  async play() {
    await repeatFunctionUntilIsValid(this.setCarNames);
    return this;
  }

  async setCarNames() {
    const inputValue = await InputView.readCarNames();
    const seperatedCarNames = gameUtils.seperateComma(inputValue);
    seperatedCarNames.map((carName) => new Car(carName));
  }
}

export default RacingGame;
