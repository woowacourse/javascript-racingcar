import Cars from '../domain/Cars';
import Race from '../domain/Race';
import InputView from '../view/InputView';

class RaceController {
  #cars;

  #race;

  async start() {
    const carsName = await InputView.readCarsName();
    this.#cars = new Cars(carsName);

    const attemptNum = await InputView.readAttemptNum();
    this.#race = new Race(attemptNum);

    this.#race.raceStart(this.#cars);
  }
}

export default RaceController;
