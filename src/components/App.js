import UserInput from './UserInput.js';
import GameProcess from './GameProcess.js';
import GameResult from './GameResult.js';
import State from '../library/core/State.js';
import Page from '../library/core/Page.js';

export default class App extends Page {
  cars;
  raceTimes;
  winners;

  constructor($target, props) {
    super($target, props);
    this.initialize();
  }

  initialize = () => {
    this.winners = [];
    this.#initStates();
    this.render();
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
    this.mountUserInput();
  };

  mountUserInput = () => {
    new UserInput(document.querySelector('#user-input-component'), {
      cars: this.cars,
      raceTimes: this.raceTimes,
      mountGameProcess: this.mountGameProcess,
      race: this.race,
    });
  }

  mountGameProcess = () => {
    new GameProcess(document.querySelector('#game-process-component'), {
      cars: this.cars,
    });
  };

  mountGameResult = () => {
    new GameResult(document.querySelector('#game-result-component'), {
      winners: this.winners,
      reset: this.initialize,
    });
  };

  race = () => {
    for (let i = 0; i < this.raceTimes.value; i++) {
      this.#processRaceOnce();
    }
    this.#determineWinners();
    this.mountGameResult();
  };

  #processRaceOnce() {
    this.cars.value = this.cars.value.map(car => {
      car.process();
      return car;
    });
  }

  #determineWinners() {
    let maxPosition = Math.max(...this.cars.value.map(car => car.position));
    this.cars.value.forEach(car => {
      if (car.position === maxPosition) {
        this.winners.push(car.name);
      }
    });
  }

  #initStates() {
    this.cars = new State([]);
    this.raceTimes = new State(null);
  }
}
