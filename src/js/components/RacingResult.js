export default class RacingResult {
  constructor(props) {
    this.props = props;
    this.cars = this.props.cars;

    this.mountDOM();
  }

  mountDOM() {
    this.$parent = this.props.$parent;
    const $container = document.createElement('div');
    [
      'd-flex',
      'justify-center',
      'mt-5',
      'racing-result-container',
    ].forEach(className => $container.classList.add(className));

    this.$container = $container;
    this.$parent.appendChild(this.$container);
  }

  setState({ nextCars }) {
    this.cars = nextCars;
    this.render();
  }

  createCarHTML(car) {
    return `
    <div class="car-player-container">
      <div class="car-player mr-2">${car.name}</div>
      ${'<div class="forward-icon mt-2">⬇️️</div>'.repeat(car.score)}
    </div>
    `;
  }

  createRacingResultHTML() {
    return `        
    <section class="mt-4">
      <div class="d-flex">
        ${this.cars.map(this.createCarHTML).join('')}
      </div>
    </section>`;
  }

  render() {
    this.$container.innerHTML = this.cars.length
      ? this.createRacingResultHTML()
      : '';
  }
}
