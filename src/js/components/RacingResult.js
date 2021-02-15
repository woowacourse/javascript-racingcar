export default class RacingResult {
  constructor(props) {
    this.props = props;
    this.cars = this.props.cars;
    this.isGameFinished = this.props.isGameFinished;

    this.mountDOM();
  }

  mountDOM() {
    this.$parent = this.props.$parent;
    this.$container = document.createElement('div');
    this.$container.className =
      'd-flex justify-center mt-5 racing-result-container';

    this.$parent.appendChild(this.$container);
  }

  setState({ nextCars, nextIsGameFinished }) {
    this.isGameFinished = nextIsGameFinished ?? false;

    if (nextCars) {
      this.cars = nextCars;
    }

    this.render();
  }

  createCarHTML(car) {
    return `
    <div class="car-player-container">
      <div class="car-player mr-2">${car.name}</div>
      ${'<div class="forward-icon mt-2">⬇️️</div>'.repeat(car.score)}
      ${this.isGameFinished ? '' : loadingHTML}
    </div>
    `;
  }

  createRacingResultHTML() {
    return `        
    <section class="mt-4">
      <div class="d-flex">
        ${this.cars.map(this.createCarHTML.bind(this)).join('')}
      </div>
    </section>`;
  }

  render() {
    this.$container.innerHTML = this.cars.length
      ? this.createRacingResultHTML()
      : '';
  }
}

const loadingHTML = `
<div class="d-flex justify-center mt-4">
  <div class="relative spinner-container">
    <span class="material spinner"></span>
  </div>
</div>`;
