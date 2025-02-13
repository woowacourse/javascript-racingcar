import splitStringToArray from '../src/utils/utils.js';

test('콤마를 기준으로 자동차 이름을 분리한다', () => {
  // when
  const cars = splitStringToArray('except,hailey,jun', ',');

  // then
  expect(cars).toEqual(['except', 'hailey', 'jun']);
});
