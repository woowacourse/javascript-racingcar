const Attempts = require('../model/Attempts');
const Car = require('../model/Car');
const InputView = require('../view/InputView');

class Controller {
  #cars = [];

  #attempt;

  constructor() {}

  play() {
    this.askCarName();
  }

  askCarName() {
    InputView.readCarName((nameInput) => {
      const carNames = nameInput.split(',');
      console.log(carNames);
      carNames.forEach((name) => {
        const carModel = new Car(name);
        this.#cars.push(carModel);
      });
      this.askAttempts();
    });
  }

  askAttempts() {
    InputView.readAttempts((attemptInput) => {
      this.#attempt = new Attempts(attemptInput);
    });
  }
}

module.exports = Controller;
