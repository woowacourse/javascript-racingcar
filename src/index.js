import { readLineAsync } from './utils.js';
import Validator from './validator.js';

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
async function run() {
  const rawName = await readLineAsync(
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  );
  Validator.validateCarName(rawName);
  const nameList = rawName.split(',');

  const rawCount = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
  Validator.validateCount(rawCount);
  const count = Number(rawCount);

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

  console.log(`최종 우승자: ${winnerOutput}`);
}

await run();
