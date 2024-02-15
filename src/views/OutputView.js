import CONDITIONS from '../constants/Conditions.js';
import messages from '../constants/Messages.js';

// const Private = {
// };

const OutputView = {
  print(message) {
    console.log(message);
  },

  printProgress([cars, positions]) {
    cars.forEach((car, index) => {
      this.print(`${car} : ${CONDITIONS.progressMarker.repeat(positions[index])}`);
    });
    this.print('');
  },
};

export default OutputView;
