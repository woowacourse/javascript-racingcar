class RacingCarGame {
  getResult(carNamesMap, totalTrialCount) {
    let carResult = '\n실행 결과\n';
    return carResult.concat(
      this.defaultRacingCarGame(carNamesMap),
      this.generateRacingCarGame(carNamesMap, totalTrialCount),
      this.getWinnerCar(carNamesMap)
    );
  }

  generateRacingCarGame(carNamesMap, totalTrialCount) {
    let movingCars = '';
    for (let count = 0; count < totalTrialCount; count++) {
      [...carNamesMap.keys()].forEach(carName => {
        if (this.goForward()) carNamesMap.set(carName, carNamesMap.get(carName) + 1);
        movingCars += `${carName} : ${'-'.repeat(carNamesMap.get(carName))}\n`;
      });
      movingCars += '\n';
    }
    return movingCars;
  }

  defaultRacingCarGame(carNamesMap) {
    let defaultCars = '';
    [...carNamesMap.keys()].forEach(carName => (defaultCars += `${carName} : -\n`));
    return `${defaultCars}\n`;
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
