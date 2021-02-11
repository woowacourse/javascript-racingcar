import Component from '../library/core/Component.js';
import UserInput from './UserInput.js';
import GameProcess from './GameProcess.js';
import GameResult from './GameResult.js';
import { $ } from '../library/utils/dom.js';

export default class App extends Component {
  cars;
  raceTimes;
  winners;

  constructor($target, props) {
    super($target, props);
    this.initStates();
    this.render();
  }

  initStates() {
    this.cars = [];
    this.raceTimes = 0;
    this.winners = '';
  }

  setCars = newValue => {
    this.cars = newValue;
  };

  setRaceTimes = newValue => {
    this.raceTimes = newValue;
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
    new GameProcess($('#game-process-component'), {
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

  race = () => {
    this.#processRacing();
    this.winners = this.#getWinners();
    this.mountGameResult();
  };

  #processRacing() {
    for (let i = 0; i < this.raceTimes; i++) {
      this.cars.forEach(car => car.process());
    }
  }

  #getWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));

    return this.cars
      .filter(({ position }) => position === maxPosition)
      .map(({ name }) => name);
  }
}
