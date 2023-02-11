class RacingCarGame {
  getResult(carNamesMap, totalTrialCount) {
    let carCount = 0;
    let carResult = '\n실행 결과\n';
    let defaultCarValue = [...carNamesMap.keys()];
    defaultCarValue.map(carName => (carResult += `${carName} : -\n`));
    carResult += '\n';

    //게임 진행
    while (carCount < totalTrialCount) {
      defaultCarValue.map(car => {
        if (this.goForward()) {
          carNamesMap.set(car, carNamesMap.get(car) + 1);
        }
        carResult += `${car} : ${'-'.repeat(carNamesMap.get(car))}\n`;
      });
      carResult += '\n';
      carCount += 1;
    }

    // 우승자 더하기
    carResult += this.getWinnerCar(carNamesMap);
    return carResult;
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

    //결과 문자열 만들기
    return result.join(', ') + '이(가) 최종 우승했습니다.';
  }
}

module.exports = RacingCarGame;
