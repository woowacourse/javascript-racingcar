import { InputView } from './view';
import RaceController from './controller/RaceController';

const app = {
  async play() {
    const carNameList = await InputView.readCarNameList();
    const turnCount = await InputView.readTurnCount();
    const race = new RaceController(carNameList, turnCount);
    race.start();
    race.showRaceResult();
  },
};

app.play();
