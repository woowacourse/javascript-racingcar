import Component from '../library/core/Component.js';
import State from '../library/core/State.js';
import Car from '../library/models/Car.js';
import { ERROR_MESSAGE, RESTRICT } from '../library/utils/constant.js';
import { disableElement, showElement } from '../library/utils/dom.js';

export default class UserInput extends Component {
  constructor($target, props) {
    super($target, props);
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
    if (!this.#verifyCarNamesLength(carNames)) {
      alert(ERROR_MESSAGE.RANGE_CAR_NAME_LENGTH);
      return;
    }

    // this.props.cars는 원 배열의 주소값을 저장하고 있으므로 push로만 구현이 가능
    carNames.map(carName => new Car(carName)).
      forEach((car) => {
        this.props.cars.push(new State(car));
      });
    showElement($sectionRaceTimes);
    disableElement($buttonCarName);
    disableElement($inputCarName);
  }

  #verifyCarNamesLength(carNames) {
    if (!carNames.every(name => name.length >= RESTRICT.MIN_CAR_NAME_LENGTH && name.length <= RESTRICT.MAX_CAR_NAME_LENGTH)) {
      return false;
    }
    return true;
  }

  #handleSubmitRaceTimes($buttonRaceTime) {
    const $inputRaceTimes = document.querySelector('#input-race-times');
    if (!this.#verifyMinRacingTimes($inputRaceTimes.value)) {
      alert(ERROR_MESSAGE.MIN_RACING_TIME);
      return;
    }

    this.props.raceTimes.value = Math.floor($inputRaceTimes.value);
    this.props.mountGameProcess();
    this.props.race();
    disableElement($buttonRaceTime);
    disableElement($inputRaceTimes);
  }

  #verifyMinRacingTimes(value) {
    if (value < RESTRICT.MIN_RACING_TIME) {
      return false;
    }
    return true;
  }
}
