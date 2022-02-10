import { checkStringLength } from '../lib/utils.js';

class Car {
  constructor(name) {
    // this.id = generateId();
    this.init(name);
  }

  goForward() {
    this.progress += 1;
  }

  init(name) {
    if (!checkStringLength(name, 5)) {
      throw Error('5자 이하의 자동차 이름을 입력해주세요');
    }
    this.name = name;
    this.progress = 0;
  }
}

export default Car;
