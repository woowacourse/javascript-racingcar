import CarList from './domain/CarList';
import { InputView } from './view';
import race from './controller/race';

const app = {
  async play() {
    const carNameList = await InputView.readCarNameList();
    const turnCount = await InputView.readTurnCount();
    const carList = new CarList(carNameList);
    race.start(carList, turnCount);
    race.showWinner(carList);
  },
};

app.play();
