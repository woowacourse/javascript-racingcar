import CONDITIONS from '../constants/Conditions.js';

const OutputView = {
  print(message) {
    console.log(message);
  },

  printProgress(cars, positions) {
    cars.forEach((car, index) => {
      this.print(`${car} : ${CONDITIONS.progressMarker.repeat(positions[index])}`);
    });
    this.print('');
  },
};

export default OutputView;
