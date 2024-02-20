const getRandomNumberInRange = require('../src/utils/getRandomNumberInRange.js');
const getNumberToDistanceSymbol = require('../src/utils/getNumberToDistanceSymbol.js');
const splitByDelimiter = require('../src/utils/splitByDelimiter.js');

jest.spyOn(Math, 'random').mockReturnValue(0.5);

test.each([
  [1, 10, 6],
  [2, 5, 4],
  [11, 12, 12],
])('입력받은 범위 내 정상적인 랜덤값 생성 테스트', (start, end, expectResult) => {
  const randomNumber = getRandomNumberInRange(start, end);

  expect(randomNumber).toBe(expectResult);
});

test.each([
  [2, '--'],
  [0, ''],
  [10, '----------'],
])('거리값을 문자로 정상 변환 테스트', (distance, expectSymbol) => {
  const distanceSymbol = getNumberToDistanceSymbol(distance);

  expect(distanceSymbol).toBe(expectSymbol);
});

test.each([
  ['자동차,트럭,경운기', ['자동차', '트럭', '경운기']],
  ['자동차, 트럭, 경운기       ', ['자동차', '트럭', '경운기']],
  ['   자동차  ', ['자동차']],
])('문자열을 구분자로 정상 분리 테스트 (양 끝 공백 제거)', (str, expectArr) => {
  const result = splitByDelimiter(str);

  expect(result).toEqual(expectArr);
});
