import Component from '../library/core/Component.js';
import UserInput from './UserInput.js';
import GameProcess from './GameProcess.js';
import GameResult from './GameResult.js';
import { $ } from '../library/utils/dom.js';

export default class App extends Component {
  gameProcess;
  cars;
  winners;
  raceTimes;

  constructor($target, props) {
    super($target, props);
    this.initStates();
    this.render();
  }

  initStates() {
    this.cars = [];
    this.winners = '';
    this.raceTimes = { value: 0 };
  }

  setCars = newValue => {
    this.cars = newValue;
  };

  getRaceTimes = () => this.raceTimes.value;

  setRaceTimes = newValue => {
    this.raceTimes.value = newValue;
  };

  mountTemplate() {
    this.$target.innerHTML = `
      <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
      <div class="d-flex justify-center mt-5">
        <div id="user-input-component"></div>
      </div>
      <div id="game-process-component" class="d-flex justify-center mt-5"></div>
      <div id="game-result-component" class="d-flex justify-center mt-5"></div>
    `;
  }

  mountChildComponents = () => {
    new UserInput($('#user-input-component'), {
      setCars: this.setCars,
      setRaceTimes: this.setRaceTimes,
      mountGameProcess: this.mountGameProcess,
      race: this.race,
    });
  };

  mountGameProcess = () => {
    this.gameProcess = new GameProcess($('#game-process-component'), {
      getRaceTimes: this.getRaceTimes,
      cars: this.cars,
    });
  };

  mountGameResult = () => {
    new GameResult($('#game-result-component'), {
      winners: this.winners,
      reset: this.reset,
    });
  };

  reset = () => {
    this.initStates();
    this.render();
  };

  race = async () => {
    await this.#processRacing();
    this.winners = this.#getWinners();
    this.mountGameResult();
  };

  #processRacing() {
    const intervalId = setInterval(() => {
      if (this.getRaceTimes() <= 0) return;

      this.setRaceTimes(this.getRaceTimes() - 1);
      this.cars.forEach(car => car.process());
      this.gameProcess.render();
    }, 1000);

    return new Promise(resolve => {
      setTimeout(() => {
        clearInterval(intervalId);
        resolve();
      }, (this.getRaceTimes() + 1) * 1000);
    });
  }

  #getWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));

    return this.cars
      .filter(({ position }) => position === maxPosition)
      .map(({ name }) => name);
  }
}
