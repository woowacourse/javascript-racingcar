import messages from '../constants/messages.js';

// const Private = {
// };

const OutputView = {
  print(message) {
    console.log(message);
  },

  printProgress([cars, positions]) {
    const PROGRESS_MARKER = '-';
    cars.forEach((car, index) => {
      this.print(`${car} : ${PROGRESS_MARKER.repeat(positions[index])}`);
    });
    this.print('');
  },
};

export default OutputView;
