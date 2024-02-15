import CarList from './CarList';
import InputView from './views/InputView';

class App {
  async play() {
    const carNameList = await InputView.readCarList();
    const carList = new CarList(carNameList);
    const turnCount = await InputView.readTurnCount();
    for (let i = 0; i < turnCount; i += 1) {
      carList.printCurrentPosition();
    }
    const winners = carList.getWinner();
    console.log(`최종 우승자: ${winners.join(', ')}`);
  }
}

const app = new App();
app.play();
