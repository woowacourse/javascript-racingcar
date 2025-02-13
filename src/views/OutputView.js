export default class OutputView {
  static printOneGame(nameList, cars) {
    for (let i = 0; i < nameList.length; i++) {
      const carOutput = '-'.repeat(cars[i].position);
      console.log(`${nameList[i]} : ${carOutput}`);
    }
    console.log('');
  }
}
