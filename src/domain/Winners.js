class Winners {
  #names;

  determine(carList) {
    const maxPosition = Math.max(...carList.map((car) => car.getPosition()));

    this.#names = carList
      .filter((car) => car.getPosition() === maxPosition)
      .map((winner) => winner.getName());
  }

  getNames() {
    return this.#names.join(', ');
  }
}

export default Winners;
