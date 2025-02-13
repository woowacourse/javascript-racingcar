import CarModel from './model/CarModel.js';
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
  const cars = [];

  const nameList = await InputView.getNameList();
  const count = await InputView.getCount();

  nameList.forEach(name => {
    const car = new CarModel(name);
    cars.push(car);
  });

  console.log('\n실행 결과');
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < nameList.length; j++) {
      const currentCar = cars[j];
      currentCar.go();
    }
    printOneGame(nameList, cars);
  }

  let winnerPosition = 0;
  cars.forEach(car => {
    winnerPosition = Math.max(car.position, winnerPosition);
  });

  const winnerList = [];
  for (let i = 0; i < nameList.length; i++) {
    const position = cars[i].position;
    if (position === winnerPosition) winnerList.push(nameList[i]);
  }

  const winnerOutput = winnerList.join(', ');

  // FIX: 한 자동차가 0의 스코어일때 최종우승자가 뜨지 않는 오류
  console.log(`최종 우승자: ${winnerOutput}`);
}

// await run();
