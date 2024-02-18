import CONDITIONS from '../constants/Conditions.js';

const OutputView = {
  print(message) {
    console.log(message);
  },

  printProgress(carList) {
    carList.forEach(car => {
      this.print(`${car.getName()} : ${CONDITIONS.progressMarker.repeat(car.getPosition())}`);
    });
    this.print('');
  },
};

export default OutputView;
