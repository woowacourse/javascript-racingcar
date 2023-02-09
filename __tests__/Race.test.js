const Car = require('../src/Models/Car');
const Race = require('../src/Models/Race');
const RandomNumGenerator = require('../src/Utils/RandomNumGenerator');

const mockRandoms = numbers => {
  RandomNumGenerator.generateNumber = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    RandomNumGenerator.generateNumber,
  );
};

test('Race Class 테스트', () => {
  // given
  const cars = [];
  ['garam', 'yeop'].forEach(name => {
    cars.push(new Car(name));
  });
  const race = new Race(cars);
  const tryCount = 3;
  mockRandoms([1, 2, 3, 4, 5, 6]);
  const result = new Map([
    ['garam', 1],
    ['yeop', 2],
  ]);

  // when
  for (let i = 0; i < tryCount; i += 1) {
    race.go();
  }

  // then
  expect(race.getResult()).toEqual(result);
});
