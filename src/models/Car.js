class Car {
  #name = '';
  #step = 0;

  constructor(name, step, randomNumber) {
    this.#name = name;
    this.#step = step;
    this.#movement(randomNumber);
  }

  #movement(randomNumber) {
    if (randomNumber >= 4) this.#step += 1;
  }

  getCarInfo() {
    return { name: this.#name, step: this.#step };
  }
}

export default Car;
