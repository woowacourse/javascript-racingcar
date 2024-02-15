import messages from '../constants/messages.js';

// const Private = {
// };

const OutputView = {
  print(message) {
    console.log(message);
  },

  printProgress([cars, positions]) {
    cars.forEach((car, index) => {
      this.print(`${car} : ${'-'.repeat(positions[index])}`);
    });
    this.print('');
  },
};

export default OutputView;
