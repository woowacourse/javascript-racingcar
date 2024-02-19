import { InputView } from './view';
import RaceController from './controller/RaceController';

const app = {
  async play() {
    const carNameList = await InputView.readCarNameList();
    const raceCount = await InputView.readRaceCount();
    const race = new RaceController(carNameList, raceCount);
    race.start();
    race.showRaceResult();
  },
};

app.play();
