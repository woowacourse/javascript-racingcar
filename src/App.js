import CarModel from './models/CarModel.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

export default class App {
  async run() {
    const names = await InputView.getNames();
    const count = await InputView.getCount();

    const cars = names.map(name => new CarModel(name));

    OutputView.print('\n실행 결과');
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < names.length; j++) {
        const currentCar = cars[j];
        currentCar.go();
      }
      OutputView.printOneGame(names, cars);
    }

    let winnerPosition = 0;
    cars.forEach(car => {
      winnerPosition = Math.max(car.position, winnerPosition);
    });

    const winners = [];
    for (let i = 0; i < names.length; i++) {
      const position = cars[i].position;
      if (position === winnerPosition) winners.push(names[i]);
    }

    const winnerOutput = winners.join(', ');

    OutputView.print(`최종 우승자: ${winnerOutput}`);
  }
}
