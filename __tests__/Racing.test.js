import Racing from '../src/Racing.js';
import Car from '../src/Car.js';

describe('자동차 경주 객체 테스트', () => {
  const carNames = ['abc', 'def', 'efg'];
  const carList = carNames.map((carName, i) => new Car(carName, i));
  const count = 5;
  const racing = new Racing(carList, count);

  test('자동차 객체 정보를 담는다.', () => {
    expect(racing.getCarList().map((car) => car.getName())).toEqual(carNames);
  });

  test('자동차 객체 중 가장 멀리 간 자동차를 선정할 수 있다.', () => {
    expect(racing.getWinner()).toEqual('efg');
  });
  test('우승자가 여러 명인 경우 쉼표를 이용해 구분한다', () => {
    carList.push(new Car('hij', 2));
    expect(racing.getWinner()).toEqual('efg, hij');
  });
});
