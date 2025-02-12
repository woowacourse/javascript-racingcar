import { readLineAsync } from './src/utils.js';
import Validator from './src/validator.js';

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

async function retryUntilSuccess(callbackFn) {
  try {
    return await callbackFn();
  } catch {
    return await retryUntilSuccess(callbackFn);
  }
}

// 입출력 예시
async function run() {
  const nameList = await getNameList();
  const count = await getCount();

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

async function getNameList() {
  return retryUntilSuccess(async () => {
    // const rawName = await readLineAsync(
    //   '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
    // );
    // Validator.validateCarName(rawName);
    return rawName.split(',');
  });
}
async function getCount() {
  return retryUntilSuccess(async () => {
    const rawCount = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
    Validator.validateCount(rawCount);
    return Number(rawCount);
  });
}

await run();
