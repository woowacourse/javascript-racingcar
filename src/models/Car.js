class Car {
  /** @type {string} */
  #name;

  /** @type {number} */
  #position;

  /**
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  getRaceState() {
    const name = this.#name;
    const position = this.#position;

    return { name, position };
  }

  move() {
    this.#position += 1;
  }
}

export default Car;
