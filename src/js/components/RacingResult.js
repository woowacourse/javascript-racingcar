import { SPINNER_TEMPLATE, RACING_RESULT_DELAY } from '../util/constants.js';

export default class RacingResult {
  constructor({ $parent, cars }) {
    this.$parent = $parent;
    this.cars = cars;
    this.turn = 0;

    this.init();
  }

  init() {
    const $container = document.createElement('div');
    $container.classList.add('d-flex', 'justify-center', 'mt-5', 'racing-result-container');

    this.$container = $container;
    this.$parent.appendChild(this.$container);
  }

  showResultWithDelay() {
    const tryCount = this.cars[0].movesPerTurn.length;

    return new Promise((resolve) => {
      const timeoutId = setInterval(() => {
        this.setState({ turn: this.turn + 1 });

        if (tryCount === this.turn) {
          clearInterval(timeoutId);
          resolve();
        }
      }, RACING_RESULT_DELAY);
    });
  }

  async showResult(cars) {
    this.setState({ cars });

    await this.showResultWithDelay();
  }

  reset() {
    this.setState({ cars: [], turn: 0 });
  }

  setState({ cars, turn }) {
    if (cars) {
      this.cars = cars;
    }

    if (!isNaN(turn)) {
      this.turn = turn;
    }

    this.render();
  }

  createCarHTML(car) {
    return `
      <div class="car-player-container">
        <div class="car-player mr-2">${car.name}</div>
        ${'<div class="forward-icon mt-2">⬇️️</div>'.repeat(car.getScoreBy(this.turn))}
        ${car.movesPerTurn.length !== this.turn ? SPINNER_TEMPLATE : ''}
      </div>
    `;
  }

  createRacingResultHTML() {
    return `        
      <section class="mt-4">
        <div class="d-flex">
          ${this.cars.map((car) => this.createCarHTML(car)).join('')}
        </div>
      </section>
    `;
  }

  render() {
    this.$container.innerHTML = this.cars.length ? this.createRacingResultHTML() : '';
  }
}
