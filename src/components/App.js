import Component from '../library/core/Component.js';
import UserInput from './UserInput.js';
import GameProcess from './GameProcess.js';
import GameResult from './GameResult.js';
import State from '../library/core/State.js';

export default class App extends Component {
  cars;

  constructor($target, props) {
    super($target, props);
    this.initStates();
  }

  initStates() {
    this.cars = new State([]);
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

  mountChildComponents() {
    new UserInput(document.querySelector('#user-input-component'), {
      cars: this.cars,
    });
    new GameProcess(document.querySelector('#game-process-component'));
    new GameResult(document.querySelector('#game-result-component'));
  }
}
