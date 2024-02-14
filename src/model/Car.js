class Car {
  constructor(carName) {
    this.carName = carName;
    this.advance = 0;
  }

  updateAdvance(number) {
    if (number >= 4) this.advance += 1;
  }
}

export default Car;
