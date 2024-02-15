const MESSAGE = Object.freeze({
  readCarNames:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  readAttempt: "시도할 횟수는 몇 회인가요?\n",

  positionIndex: "-",
  printCarInfo: (car) =>
    `${car.info().name} : ${MESSAGE.positionIndex.repeat(car.info().position)}`,

  printAttemptTitle: "실행 결과",
});

export default MESSAGE;
