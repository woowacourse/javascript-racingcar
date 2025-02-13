import { readLineAsync } from './utils.js';
import Validator from './validator.js';
import InputView from './view/InputView.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function printOneGame(nameList, positionList) {
  for (let i = 0; i < nameList.length; i++) {
    const carOutput = '-'.repeat(positionList[i]);
    console.log(`${nameList[i]} : ${carOutput}`);
  }
  console.log('');
}

// 입출력 예시
export async function run() {
  console.log(1);
  const nameList = await InputView.getNameList();
  console.log(2);
  const count = await InputView.getCount();

  const positionList = new Array(count).fill(0);

  console.log('\n실행 결과');
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < nameList.length; j++) {
      const randomNumber = getRandomInt(10);

      if (randomNumber >= 4) positionList[j] += 1;
    }
    printOneGame(nameList, positionList, nameList);
  }

  const winnerPosition = [...positionList].sort().reverse().at(0);

  const winnerList = [];
  for (let i = 0; i < count; i++) {
    const position = positionList[i];
    if (position === winnerPosition) winnerList.push(nameList[i]);
  }

  const winnerOutput = winnerList.join(', ');

  // FIX: 한 자동차가 0의 스코어일때 최종우승자가 뜨지 않는 오류
  console.log(`최종 우승자: ${winnerOutput}`);
}

await run();
