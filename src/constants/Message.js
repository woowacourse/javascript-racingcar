const MESSAGE = Object.freeze({
  readCarNames:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  readAttempt: "시도할 횟수는 몇 회인가요?\n",

  positionIndex: "-",
  championSeparator: ", ",
  printCarInfo: (car) =>
    `${car.getInfo().name} : ${MESSAGE.positionIndex.repeat(car.getInfo().position)}`,

  printAttemptTitle: "실행 결과",
  printChampionTitle: "최종 우승자",
});

export default MESSAGE;
