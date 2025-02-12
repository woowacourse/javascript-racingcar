class Car {
  #name = '';
  position = 0;

  constructor(name) {
    this.#name = name;
  }

  move(value) {
    if (value >= 4) this.position += 1;
  }

  getRacingStatus() {
    return `${this.#name} : ${'-'.repeat(this.position)}`;
  }
}

export default Car;
