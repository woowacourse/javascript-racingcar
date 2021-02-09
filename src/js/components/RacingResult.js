export default class RacingResult {
  constructor({ $parent, cars }) {
    this.$parent = $parent;
    this.cars = cars;

    this.init();
  }

  init() {
    const $container = document.createElement("div");
    const containerClassList = [
      "d-flex",
      "justify-center",
      "mt-5",
      "racing-result-container",
    ];
    containerClassList.forEach((className) =>
      $container.classList.add(className),
    );

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
    </div>
    `;
  }

  createRacingResultHTML() {
    return `        
    <section class="mt-4">
      <div class="d-flex">
        ${this.cars.map(this.createCarHTML).join("")}
      </div>
    </section>`;
  }
  render() {
    this.$container.innerHTML = this.cars.length
      ? this.createRacingResultHTML()
      : "";
  }
}
