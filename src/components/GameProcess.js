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
    return this.props.cars.reduce(
      (acc, car) => acc + this.#createCarProcessTemplate(car),
      ''
    )
  }

  #createCarProcessTemplate({ value }) {
    return `
      <div class="car">
        <div class="car-player mr-2">${value.name}</div>
        ${'<div class="forward-icon mt-2">⬇️</div>'.repeat(value.position)}
        ${this.#createProcessSpinner()}
      </div>
    `;
  }

  #createProcessSpinner() {
    if (this.props.isFinished) {
      return "";
    }
    return `
    <div class="d-flex justify-center mt-4">
      <div class="relative spinner-container">
        <span class="material spinner"></span>
      </div>
    </div>
    `;
  }
}
