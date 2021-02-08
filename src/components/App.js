import Component from '../library/core/Component.js';
import UserInput from './UserInput.js';
import GameProcess from './GameProcess.js';
import GameResult from './GameResult.js';
import State from '../library/core/State.js';

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
    this.cars = new State([]);
    this.raceTimes = new State(null);
    this.winners = '';
  }

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
    new UserInput(document.querySelector('#user-input-component'), {
      cars: this.cars,
      raceTimes: this.raceTimes,
      mountGameProcess: this.mountGameProcess,
      race: this.race,
    });
  };

  mountGameProcess = () => {
    new GameProcess(document.querySelector('#game-process-component'), {
      cars: this.cars,
    });
  };

  mountGameResult = () => {
    new GameResult(document.querySelector('#game-result-component'), {
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
    for (let i = 0; i < this.raceTimes.value; i++) {
      this.cars.value.forEach(car => car.process());
    }
  }

  #getWinners() {
    const winners = [];
    const maxPosition = Math.max(...this.cars.value.map(car => car.position));
    this.cars.value.forEach(car => {
      if (car.position === maxPosition) {
        winners.push(car.name);
      }
    });

    return winners;
  }
}
