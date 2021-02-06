import Component from '../library/core/Component.js';
import Car from '../library/models/Car.js';

export default class UserInput extends Component {
  constructor($target, props) {
    super($target, props);
  }

  initEvent() {
    const $submitCarName = document.querySelector('#submit-car-name');
    $submitCarName.addEventListener('click', () => {
      const { value } = document.querySelector('#input-car-name');
      const carNames = value.split(',').map(name => name.trim());
      try {
        if (carNames.some(name => name.length < 1 || name.length > 5)) {
          throw new Error('자동차의 이름은 1자이상, 5자 이하만 가능합니다.');
        }
      } catch (err) {
        alert(err);
        return;
      }
      this.props.cars = document
        .querySelector('#section-race-times')
        .removeAttribute('hidden');
    });
  }

  render() {
    this.$target.innerHTML = `
      <section>
        <p>
          5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
          예시) EAST, WEST, SOUTH, NORTH
        </p>
      </section>
      <section>
        <div class="d-flex">
          <input type="text" id="input-car-name" class="w-100 mr-2" placeholder="자동차 이름" />
          <button type="submit" id="submit-car-name" class="btn btn-cyan">확인</button>
        </div>
      </section>
      <section id="section-race-times" class="mt-5" hidden>
        <p>시도할 횟수를 입력해주세요.</p>
        <div class="d-flex">
          <input type="number" class="w-100 mr-2" placeholder="시도 횟수" />
          <button type="button" class="btn btn-cyan">확인</button>
        </div>
      </section>
    `;
  }
}
