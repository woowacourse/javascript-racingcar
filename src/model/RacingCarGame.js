class RacingCarGame {
  getResult(carNamesMap, totalTrialCount) {
    let carCount = 0;
    let carResult = '\n실행 결과\n';
    let defaultCarValue = [...carNamesMap.keys()];
    defaultCarValue.map(carName => (carResult += `${carName} : -\n`));
    carResult += '\n';

    while (carCount < totalTrialCount) {
      defaultCarValue.map(carName => {
        if (this.goForward()) {
          carNamesMap.set(carName, carNamesMap.get(carName) + 1);
        }
        carResult += `${carName} : ${'-'.repeat(carNamesMap.get(carName))}\n`;
      });
      carResult += '\n';
      carCount++;
    }

    return (carResult += this.getWinnerCar(carNamesMap));
  }

  goForward() {
    return Math.floor(Math.random() * 10) >= 4;
  }

  getWinnerCar(carNamesMap) {
    const result = [];
    const maxCarCount = Math.max(...carNamesMap.values());

    for (const car of carNamesMap) {
      const [carName, count] = car;

      if (maxCarCount === count) result.push(carName);
    }

    return result.join(', ') + '이(가) 최종 우승했습니다.';
  }
}

module.exports = RacingCarGame;
