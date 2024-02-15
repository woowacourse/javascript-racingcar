import InputView from '../views/InputView.js';
import OutputView from '../views/outputView.js';
import ProgressController from './ProgressController.js';
import WinnerController from './WinnerController.js';
class MainController {
  async run() {
    const cars = await InputView.readCarNames();
    const trialCount = await InputView.readTrialCount();
    OutputView.print('');
    new ProgressController(cars, trialCount).run();
    new WinnerController(cars).run();
  }
}

export default MainController;
v