export default class OutputView {
  printCarCurrentDistance(car) {
    const name = car.getName();
    const distance = car.getDistance();

    console.log(`${name} : ${"-".repeat(distance)}`);
  }

  printWinner(calculValue) {
    const { hasWinner, maxDistance, winners } = calculValue;
    const text = "최종 우승자 : ";

    if (hasWinner) {
      this.printMessage(text + winners.map((car) => car.getName()).join(", "));
    }
    if (!hasWinner) {
      this.printMessage("최종 우승자는 없습니다.");
    }
  }

  printMessage(message) {
    console.log(message);
  }
}
