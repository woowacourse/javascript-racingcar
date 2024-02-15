import randomNumber from "../utils/randomNumber.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  #movable() {
    // 4 상수화
    if (randomNumber() >= 4) {
      return true;
    }

    return false;
  }

  moveOn() {
    if (this.#movable()) {
      this.#position += 1;
    }
  }

  //test를 위한 임의 getter
  position() {
    return this.#position;
  }
}

export default Car;
