<<<<<<< HEAD
import Name from './Name.js';

=======
import ERROR_MESSAGE from '../error/message.js';
import Random from './Random.js';

export const MIN_NAME_LENGTH = 1;
export const MAX_NAME_LENGTH = 5;
>>>>>>> 42bbcb3 (feat: Car 클래스에 전진 메서드 추가)
const FORWARD_CONDITION = 4;

class Car {
  #name;
  #location = 0;

  constructor(name) {
    this.#name = new Name(name);
  }

  // 차마다 전진 페달을 얼마나 밟느냐에 따라 전진되는 정도가 다를 수 있음
  forward(gasPower) {
    if (gasPower >= FORWARD_CONDITION) this.#location += 1;
  }

  getName() {
    return this.#name.getName();
  }

  getLocation() {
    return this.#location;
  }
}

export default Car;
