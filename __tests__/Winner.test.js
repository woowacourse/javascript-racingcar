import CarController from '../src/Controllers/CarController.js';
import Car from '../src/Models/Car.js';
import { mockRandom } from './Car.test.js';

jest.mock('../src/utils/randomNumber.js', () => ({
  getRandomNumber: jest.fn(),
}));

describe('우승자 선별 테스트', () => {
  test('우승자가 잘 선별되는지 테스트한다.', () => {
    // given
    const carController = new CarController();
    const car1 = new Car('재오');
    const car2 = new Car('앵버');
    const car3 = new Car('상추');
    const cars = [car1, car2, car3];
    const tryCount = 2;

    mockRandom(3);
    mockRandom(4);
    mockRandom(3);
    mockRandom(3);
    mockRandom(4);
    mockRandom(3);

    // when
    carController.tryMove(cars, tryCount);
    // const winner = carController.getWinner(cars);
    console.log(cars.map((car) => car.position));

    expect(carController.getWinner(cars)).toEqual(['앵버']);
  });
});
