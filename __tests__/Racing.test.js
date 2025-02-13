import Car from '../src/Car.js';
import Racing from '../src/Racing.js';
import getRandomNumber from '../src/utils/getRandomNumber.js';

jest.mock('../src/utils/getRandomNumber');

test.each([
  [4, [1, 1]],
  [0, [0, 0]],
])(
  '랜덤 숫자가 %s 이면 자동차의 위치는 %s가 된다.',
  (randomNumber, positions) => {
    getRandomNumber.mockReturnValue(randomNumber);

    getRandomNumber();
    getRandomNumber();

    const NAMES = ['jenna', 'mato'];
    const cars = NAMES.map((name) => new Car(name));
    const racing = new Racing(cars);
    racing.raceTurn();

    const positionResult = cars.map((car) => car.getCarPosition());
    expect(positionResult).toEqual(positions);
  },
);
