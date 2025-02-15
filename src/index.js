import Car from './domain/Car.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Race from './domain/Race.js';
import Winner from './domain/Winner.js';

export async function run() {
  const rawNameList = await InputView.getNameList();
  const nameList = rawNameList.split(',').map(name => name.trim());

  const rawCount = await InputView.getCount();
  const count = Number(rawCount);

  const cars = nameList.map(name => new Car(name));

  OutputView.printGameStart();
  const race = new Race(cars);
  const roundResultList = race.playAllRounds(count);

  OutputView.printAllGame(roundResultList, nameList);

  const winnerOutput = Winner.findWinners(cars);

  OutputView.printWinners(winnerOutput);
}

await run();
