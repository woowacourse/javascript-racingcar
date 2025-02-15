import Car from './domain/Car.js';
import Validator from './validator.js';
import InputView from './view/InputView.js';

function printOneGame(nameList, cars) {
  for (let i = 0; i < nameList.length; i++) {
    const carOutput = '-'.repeat(cars[i].position);
    console.log(`${nameList[i]} : ${carOutput}`);
  }
  console.log('');
}

// 입출력 예시
export async function run() {

  const rawNameList = await InputView.getNameList();
  Validator.validateCarName(rawNameList);
  const nameList = rawNameList.split(',').map(name => name.trim());
  
  const rawCount = await InputView.getCount();
  Validator.validateCount(rawCount);
  const count = Number(rawCount);


  const cars = nameList.map(name => new Car(name));

  console.log('\n실행 결과');
  Array.from({ length: count }, () => {
    cars.forEach(car => car.go());
    printOneGame(nameList, cars);
  });

  const winnerPosition = cars.reduce((maxPosition, car) => 
    Math.max(car.position, maxPosition), 0);

  const winnerList = cars.filter(car => car.position === winnerPosition).map(car => car.name);


  const winnerOutput = winnerList.join(', ');

  // FIX: 한 자동차가 0의 스코어일때 최종우승자가 뜨지 않는 오류
  console.log(`최종 우승자: ${winnerOutput}`);
}

await run();
