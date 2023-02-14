const Cars = require('../src/Domain/Cars');
const RandomNumGenerator = require('../src/Utils/RandomNumGenerator');

const mockRandoms = numbers => {
  RandomNumGenerator.generateNumber = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), RandomNumGenerator.generateNumber);
};

const carNames = ['garam', 'yeop'];
const cars = new Cars(carNames);

test('race 후 결과를 확인하는 Test', () => {
  // given
  const tryCount = 3;
  mockRandoms([1, 2, 3, 4, 5, 6]);
  const result = new Map([
    ['garam', 1],
    ['yeop', 2],
  ]);

  // when
  for (let i = 0; i < tryCount; i += 1) {
    cars.race();
  }

  // then
  expect(cars.getRaceResult()).toEqual(result);
});
