import Name from './Name.js';

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

  get location() {
    return this.#location;
  }
}

export default Car;
