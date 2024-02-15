import Car from '../src/Car';
//   - [ ] 각 자동차 별로 현재 위치를 출력한다.
//   - [ ] 현재 위치값이 가장 큰 최종 우승자를 출력한다.

let spy = null;
describe('무작위 값이 4 이상인 경우 자동차를 1만큼 전진시킨다.', () => {
  beforeEach(() => {
    spy = jest.spyOn(Math, 'random').mockImplementation(() => 0.4);
  });
  afterEach(() => {
    spy.mockRestore();
  });

  test('무작위 값이 4 이상이면 자동차를 1 전진시킨다.', () => {
    // Arrange
    const car = new Car('아르');

    // Act
    car.move();

    // Assert
    expect(car.getData().position).toBe(1);
  });

  test('무작위 값이 4 미만이면 자동차를 전진시키지 않는다.', () => {
    // Arrange
    jest.spyOn(Math, 'random').mockImplementation(() => 0.3);
    const car = new Car('마루');

    // Act
    car.move();

    // Assert
    expect(car.getData().position).toBe(0);
  });
});
