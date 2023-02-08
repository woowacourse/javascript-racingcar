const Console = require('./utils/Console');

class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  move(go) {
    if (go) {
      this.#position += 1;
    }
  }

  print() {
    let result = `${this.#name} : `;
    result += new Array(this.#position).fill('-').join('');
    Console.print(result);
  }
}

module.exports = Car;
