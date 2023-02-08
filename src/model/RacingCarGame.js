class RacingCarGame {
  getResult(carNamesMap, totalTrialCount) {
    // 실행 결과
    // pobi : 1
    // crong : 1
    // honux : 1

    // pobi : -----
    // crong : ----
    // honux : -----

    // pobi : -----
    // crong : ----
    // honux : -----

    // pobi, honux가 최종 우승했습니다.
    let carCount = 0;
    let carResult = '실행 결과\n';

    //초기 설정
    console.log(carNamesMap);

    for (const carName of carNamesMap.keys()) {
      carResult += `${carName} : -\n`;
    }

    carResult += '\n';

    //게임 진행
    while (carCount < totalTrialCount) {
      carNamesMap.forEach((_, carName) => {
        if (this.goForward()) {
          console.log(
            '>>> carNamesMap.get(carName):',
            carNamesMap.get(carName)
          );
          carNamesMap.set(carName, carNamesMap.get(carName) + 1);
        }
      });
      //마지막

      for (const carName of carNamesMap.keys()) {
        const forwardCount = carNamesMap.get(carName);
        carResult += `${carName} : ${'-'.repeat(forwardCount)}\n`;
      }
      carResult += '\n';

      carCount += 1;
    }

    return carResult;
  }

  goForward() {
    const GO_FORWARD = 4;
    return Math.floor(Math.random() * 10) >= GO_FORWARD;
  }
}

module.exports = RacingCarGame;
