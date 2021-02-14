import { WINNER_SEPARATOR, WINNER_MESSAGE, WINNER_MESSAGE_DELAY } from '../util/constants.js';

export default class RacingWinner {
  constructor({ $parent, resetCarGame }) {
    this.$parent = $parent;
    this.winners = [];
    this.resetCarGame = resetCarGame;

    this.init();
    this.attachEvents();
  }

  init() {
    const $container = document.createElement('div');
    $container.classList.add('d-flex', 'justify-center', 'mt-5', 'racing-winner-container');

    this.$container = $container;
    this.$parent.appendChild(this.$container);
  }

  handleClickRestart({ target }) {
    if (!target.classList.contains('btn-restart')) {
      return;
    }

    this.resetCarGame();
  }

  attachEvents() {
    this.$container.addEventListener('click', this.handleClickRestart.bind(this));
  }

  getWinners(cars) {
    const maxScore = cars.reduce(
      (accumulatedMaxScore, car) => (accumulatedMaxScore > car.getScore() ? accumulatedMaxScore : car.getScore()),
      0
    );

    return cars.filter((car) => car.getScore() === maxScore).map((car) => car.name);
  }

  showWinnerAlertWithDelay(winners) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(WINNER_MESSAGE(winners));
        resolve();
      }, WINNER_MESSAGE_DELAY);
    });
  }

  async showWinners(cars) {
    const winners = this.getWinners(cars);

    this.setState(winners);
    await this.showWinnerAlertWithDelay(winners);
  }

  reset() {
    this.setState([]);
  }

  createWinnerHTML() {
    return `
    <section>
      <h2>🏆 최종 우승자: ${this.winners.join(WINNER_SEPARATOR)} 🏆</h2>
      <div class="d-flex justify-center">
        <button type="button" data-test="restart-button" class="btn btn-cyan btn-restart">다시 시작하기</button>
      </div>
    </section>`;
  }

  setState(nextWinners) {
    this.winners = nextWinners;
    this.render();
  }

  render() {
    this.$container.innerHTML = this.winners.length ? this.createWinnerHTML() : '';
  }
}
