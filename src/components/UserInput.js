import Component from '../library/core/Component.js';
import Car from '../library/models/Car.js';
import { ERROR_MESSAGE, RESTRICT } from '../library/utils/constant.js';
import { disableElement, showElement } from '../library/utils/dom.js';

export default class UserInput extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
  }

  initEvent() {
    this.$target.addEventListener('click', ({ target }) => {
      if (target.id === 'submit-car-name') {
        this.#handleSubmitCarName(target);
      } else if (target.id === 'submit-race-times') {
        this.#handleSubmitRaceTimes(target);
      }
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
      <section id="section-race-times" class="mt-5 hidden" >
        <p>시도할 횟수를 입력해주세요.</p>
        <div class="d-flex">
          <input type="number" id="input-race-times" class="w-100 mr-2" placeholder="시도 횟수" />
          <button type="submit" id="submit-race-times" class="btn btn-cyan">확인</button>
        </div>
      </section>
    `;
  }

  #handleSubmitCarName($buttonCarName) {
    const $sectionRaceTimes = document.querySelector('#section-race-times');
    const $inputCarName = document.querySelector('#input-car-name');
    const carNames = $inputCarName.value.split(',').map(name => name.trim());
    try {
      this.#verifyCarNamesLength(carNames);
      this._verifyPropsExist("cars");
    } catch (err) {
      alert(err);
      return;
    }
    this.props.cars.value = carNames.map(carName => new Car(carName));
    showElement($sectionRaceTimes);
    disableElement($buttonCarName);
    disableElement($inputCarName);
  }

  #verifyCarNamesLength(carNames) {
    if (carNames.some(name => name.length < RESTRICT.MIN_CAR_NAME_LENGTH || name.length > RESTRICT.MAX_CAR_NAME_LENGTH)) {
      throw new Error(ERROR_MESSAGE.RANGE_CAR_NAME_LENGTH);
    }
  }

  #handleSubmitRaceTimes($buttonRaceTime) {
    const $inputRaceTimes = document.querySelector('#input-race-times');
    try {
      this.#verifyMinRacingTimes($inputRaceTimes.value);
    } catch (err) {
      alert(err);
      return;
    }

    this.props.raceTimes.value = $inputRaceTimes.value;
    this.props.race();
    this.props.mountGameProcess();
    disableElement($buttonRaceTime);
    disableElement($inputRaceTimes);
  }

  #verifyMinRacingTimes(value) {
    if (value < RESTRICT.MIN_RACING_TIME) {
      throw new Error(ERROR_MESSAGE.MIN_RACING_TIME);
    }
  }
}
