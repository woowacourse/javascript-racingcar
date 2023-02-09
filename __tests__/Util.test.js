/* eslint-disable no-undef */
const Util = require('../src/utils/Util.js');

describe('Util test', () => {
  const newMap = new Map();
  const carList = [
    { name: 'pobi', moveCount: 4 },
    { name: 'crong', moveCount: 3 },
    { name: 'honux', moveCount: 4 },
  ];
  carList.forEach((car) => {
    newMap.set(car.name, car.moveCount);
  });
  test('max value in map test', () => {
    expect(Util.maxValueInMap(newMap)).toEqual(4);
  });

  test('filter max value in objects test', () => {
    expect(Util.filterMaxObjects(newMap)).toEqual([
      ['pobi', 4],
      ['honux', 4],
    ]);
  });
});
