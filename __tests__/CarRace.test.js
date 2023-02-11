const Car = require('../src/Models/Car');
const CarRace = require('../src/Models/CarRace');
const RandomNumGenerator = require('../src/Utils/RandomNumGenerator');

const mockRandoms = numbers => {
  RandomNumGenerator.generateNumber = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    RandomNumGenerator.generateNumber,
  );
};

test('CarRace Class 테스트', () => {
  const cars = ['garam', 'yeop'].map(name => new Car(name));
  const carRace = new CarRace(cars);
  const tryCount = 3;
  mockRandoms([1, 2, 3, 4, 5, 6]);
  const result = new Map([
    ['garam', 1],
    ['yeop', 2],
  ]);

  // when
  for (let i = 0; i < tryCount; i += 1) {
    carRace.go();
  }

  // then
  expect(carRace.getResult()).toEqual(result);
});
