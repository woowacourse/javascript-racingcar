class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  // 무작위 값 가져오기 (0~9)
  #pickRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  move() {
    if (this.#pickRandomNumber() >= 4) {
      this.#position += 1;
    }
  }

  printPosition() {
    const positionString = '-'.repeat(this.#position);
    console.log(`${this.#name} : ${positionString}`);
  }
}

export default Car;
