const pickRandomNumberInRange = require('../src/utils/pickRandomNumberInRange.js');
const numberToDistanceSymbol = require('../src/utils/numberToDistanceSymbol.js');
const splitByDelimiter = require('../src/utils/splitByDelimiter.js');
const { SYMBOL } = require('../src/constant/Conditions.js');

test.each([
  [1, 10],
  [2, 5],
  [11, 12],
])('범위 내 랜덤값 생성 테스트(start 이상, end 이하)', (start, end) => {
  const randomNumber = pickRandomNumberInRange(start, end);

  expect(randomNumber).toBeGreaterThanOrEqual(start);
  expect(randomNumber).toBeLessThanOrEqual(end);
});

test.each([
  [2, '--'],
  [0, ''],
  [10, '----------'],
])('입력 받은 숫자 개수만큼 문자(-) 변환 테스트', (distance, expectSymbol) => {
  const distanceSymbol = numberToDistanceSymbol(distance);

  expect(distanceSymbol).toBe(expectSymbol);
});

test.each([
  ['자동차,트럭,경운기', ['자동차', '트럭', '경운기']],
  ['자동차, 트럭, 경운기       ', ['자동차', '트럭', '경운기']],
  ['   자동차  ', ['자동차']],
])('구분 기호에 따른 문자열 분리 테스트 (양 끝 공백 제거)', (str, expectArr) => {
  const result = splitByDelimiter(str, SYMBOL.delimiter);

  expect(result).toEqual(expectArr);
});
