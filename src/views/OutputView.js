export default class OutputView {
  static print(message) {
    console.log(message);
  }

  static printBlank() {
    this.print('');
  }

  static printOneGame(nameList, cars) {
    for (let i = 0; i < nameList.length; i++) {
      const carOutput = '-'.repeat(cars[i].position);
      this.print(`${nameList[i]} : ${carOutput}`);
    }
    this.printBlank();
  }
}
