import { makeRandomNumber, isNumberOverStandard } from '../controllers/utils.js';

export class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }
  setLocation(location) {
    this.location = location;
  }

  getLocation() {
    return this.location;
  }

  getName() {
    return this.name;
  }

  moveFoward() {
    if (isNumberOverStandard(makeRandomNumber())) {
      this.location += 1;
    }
  }
}

// 플레이별로 난수 생성하는거 util -> pass
// 난수 4이상 판별 util
