const InputView = require('../View/InputView');
const Validator = require('../Utils/Validator');

class RaceController {
  start() {
    InputView.readCarName(input => {
      const userInput = input.split(',');
      userInput.forEach(el => Validator.validateCarName(el));
    });
  }
}

module.exports = RaceController;
