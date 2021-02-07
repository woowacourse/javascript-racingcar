import Component from '../library/core/Component.js';

export default class GameProcess extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
  }

  initEvent() {}

  render() {
    this.$target.innerHTML = `
      <section class="mt-4">
        <div class="d-flex">
        </div>
      </section>
    `;
  }
  #createCarProcessTemplate(car) {
    return `<div>
    <div class="car-player mr-2">EAST</div>
    <div class="forward-icon mt-2">⬇️️</div>
    <div class="forward-icon mt-2">⬇️️</div>
  </div>`;
  }
}
