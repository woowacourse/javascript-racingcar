import gameUtils from '../utils/gameUtils';
import InputView from '../views/InputView';

class RacingGame {
  async play() {
    await this.setCarNames();
    return this;
  }

  async setCarNames() {
    const inputValue = await InputView.readCarNames();
    const seperatedCarNames = gameUtils.seperateComma(inputValue);
    console.log(seperatedCarNames);
  }
}

export default RacingGame;
