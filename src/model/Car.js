class Car {
  #name;
  #location;

  constructor(name) {
    this.#name = name;
    this.#location = 0;
  }

  move() {
    this.#location++;
  }
}

export default Car;
