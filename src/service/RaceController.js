import Race from '../domain/Race';
import InputView from '../view/InputView';

class RaceController {
  #cars;

  #race;

  async start() {
    const carsName = await InputView.readCarsName();
    this.#cars = new this.#cars(carsName);

    const attemptNum = await InputView.readAttemptNum();
    this.#race = new Race(attemptNum);
  }
}

export default RaceController;
