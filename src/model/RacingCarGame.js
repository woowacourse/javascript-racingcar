class RacingCarGame {
  getResult(carNamesMap, totalTrialCount) {
    let carCount = 0;
    let carResult = '\n실행 결과\n';

    carNamesMap.forEach((_, carName) => {
      carResult += `${carName}: -\n`
    })

    carResult += '\n'

    while (carCount < totalTrialCount) {
      carNamesMap.forEach((position, carName) => {
        if (this.goForward()) {
          carNamesMap.set(carName, position + 1);
        }

        carResult += `${carName} : ${'-'.repeat(carNamesMap.get(carName) + 1)}\n`
      });

      carResult += '\n';
      carCount += 1;
    }

    carResult += this.getWinnerCar(carNamesMap);
    return carResult;
  }

  goForward() {
    const GO_FORWARD = 4;
    return Math.floor(Math.random() * 10) >= GO_FORWARD;
  }

  getWinnerCar(carNamesMap) {
    const result = [];
    console.log('>>> carNamesMap:', carNamesMap);
    const maxCarCount = Math.max(...carNamesMap.values());

    for (const [carName, count] of carNamesMap.entries()) {
      if (maxCarCount === count) result.push(carName);
    }

    return result.join(', ') + '이(가) 최종 우승했습니다.';
  }
}

module.exports = RacingCarGame;
