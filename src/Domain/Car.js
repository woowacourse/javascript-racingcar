class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(condition) {
    this.#position += condition;
  }

  getCarStatus() {
    return {
      name: this.#name,
      position: this.#position,
    };
  }
}

export default Car;
