import Component from '../library/core/Component.js';

export default class GameProcess extends Component {
  constructor($target, props) {
    super($target, props);
  }

  initEvent() {}

  render() {
    this.$target.innerHTML = `
      <section class="mt-4">
        <div class="d-flex">
          <div>
            <div class="car-player mr-2">EAST</div>
            <div class="forward-icon mt-2">⬇️️</div>
            <div class="forward-icon mt-2">⬇️️</div>
          </div>
          <div>
            <div class="car-player mr-2">WEST</div>
            <div class="forward-icon mt-2">⬇️️</div>
          </div>
          <div>
            <div class="car-player mr-2">SOUTH</div>
            <div class="d-flex justify-center mt-4">
              <div class="relative spinner-container">
                <span class="material spinner"></span>
              </div>
            </div>
          </div>
          <div>
            <div class="car-player mr-2">NORTH</div>
            <div class="d-flex justify-center mt-4">
              <div class="relative spinner-container">
                <span class="material spinner"></span>
              </div>
            </div>
          </div>
        </div>
      </section>;
    `;
  }
}
