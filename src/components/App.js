import Component from '../library/core/Component.js';
import UserInput from './UserInput.js';
import GameProcess from './GameProcess.js';
import GameResult from './GameResult.js';
import State from '../library/core/State.js';

export default class App extends Component {
  cars;
  raceTimes;

  constructor($target, props) {
    super($target, props);
    this.initStates();
    this.render();
  }

  initStates() {
    this.cars = new State([]);
    this.raceTimes = new State(null);
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

  mountGameProcess = () => {
    new GameProcess(document.querySelector('#game-process-component'), {
      cars: this.cars,
    });
  };

  mountChildComponents = () => {
    new UserInput(document.querySelector('#user-input-component'), {
      cars: this.cars,
      raceTimes: this.raceTimes,
      mountGameProcess: this.mountGameProcess,
    });
    new GameResult(document.querySelector('#game-result-component'));
  };
}
