const { Car } = require('./Car');
const { randomGenerator } = require('./randomGenerator');

class Service {
  #cars;

  constructor(names) {
    this.#cars = Array.from(
      { length: names.length },
      (_, index) => new Car(names[index])
    );
  }

  getMovingLog(cnt) {
    let finalLogResult = '';
    const movingLog = [];
    for (let round = 0; round < cnt; round++) {
      const roundLog = {};

      this.#cars.forEach((car) => {
        const canMove = randomGenerator() >= 4;
        if (canMove) {
          car.move();
        }

        const { name, movingLog } = car.getCarInfo();
        roundLog[name] = movingLog;
      });
      movingLog.push(roundLog);
    }

    movingLog.forEach((round) => {
      Object.entries(round).forEach(([key, value]) => {
        finalLogResult += `${key} : ${value ? '-'.repeat(value) : ''}\n`;
      });
      finalLogResult += '\n';
    });

    return finalLogResult;
  }

  getWinners() {
    const cars = Array.from({ length: this.#cars.length }, (_, index) =>
      this.#cars[index].getCarInfo()
    );
    const max = cars.sort((a, b) => b.movingLog - a.movingLog)[0].movingLog;
    const winner = [];
    cars.forEach((car) => {
      if (car.movingLog === max) winner.push(car.name);
    });
    return `${winner.join(', ')}가 최종 우승했습니다.`;
  }
}

module.exports = { Service };
