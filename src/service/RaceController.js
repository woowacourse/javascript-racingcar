import InputView from '../view/InputView';

class RaceController {
  async start() {
    const carsName = await InputView.readCarsName();
  }
}

export default RaceController;
