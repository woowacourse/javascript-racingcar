import Component from '../library/core/Component.js';

export default class GameProcess extends Component {
  constructor($target, props) {
    super($target, props);
  }

  render() {
    this.$target.innerHTML = `
      <section class="mt-4">
        <div class="d-flex">
          ${this.#createCarElements()}
        </div>
      </section>
    `;
  }

  #createCarElements() {
    return this.props.cars.value.reduce(
      (acc, car) => acc + this.#createCarProcessTemplate(car),
      ''
    )
  }

  #createCarProcessTemplate(car) {
    return `
      <div class="car">
        <div class="car-player mr-2">${car.name}</div>
        ${'<div class="forward-icon mt-2">⬇️</div>'.repeat(car.position)}
      </div>
    `;
  }
}
