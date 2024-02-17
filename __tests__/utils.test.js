const pickRandomNumberInRange = require('../src/utils/pickRandomNumberInRange.js');
const numberToDistanceSymbol = require('../src/utils/numberToDistanceSymbol.js');
const splitByDelimiter = require('../src/utils/splitByDelimiter.js');

jest.spyOn(Math, 'random').mockReturnValue(0.5);

test.each([
  [1, 10, 6],
  [2, 5, 4],
  [11, 12, 12],
])('범위 내 랜덤값 생성 테스트', (start, end, expectResult) => {
  const randomNumber = pickRandomNumberInRange(start, end);

  expect(randomNumber).toBe(expectResult);
});

test.each([
  [2, '--'],
  [0, ''],
  [10, '----------'],
])('거리 문자 변환 테스트', (distance, expectSymbol) => {
  const distanceSymbol = numberToDistanceSymbol(distance);

  expect(distanceSymbol).toBe(expectSymbol);
});

test.each([
  ['자동차,트럭,경운기', ['자동차', '트럭', '경운기']],
  ['자동차, 트럭, 경운기       ', ['자동차', '트럭', '경운기']],
  ['   자동차  ', ['자동차']],
])('문자열 구분자 분리 테스트 (양 끝 공백 제거)', (str, expectArr) => {
  const result = splitByDelimiter(str);

  expect(result).toEqual(expectArr);
});
