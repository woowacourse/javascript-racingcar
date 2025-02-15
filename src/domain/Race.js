class Race {
  constructor(cars) {
    this.cars = cars;
  }

  playOneRound() {
    this.cars.forEach(car => car.go());
    return [...this.cars]; // 현재 라운드의 상태 반환
  }

  playAllRounds(count) {
    const results = [];
    for (let i = 0; i < count; i += 1) {
      results.push(this.playOneRound());
    }
    return results;
  }
}

export default Race;
