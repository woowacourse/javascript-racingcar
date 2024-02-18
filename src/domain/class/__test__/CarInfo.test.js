import mockRandomNumberInRange from './testUtil/mockRandomNumberInRange';
import CarInfo from '../../class/CarInfo';

mockRandomNumberInRange;
describe('CarInfo 클래스 테스트', () => {
  test(`CarInfo 생성 시 결과가 잘 생성이 되는지 확인`, () => {
    // Arrange
    const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const positions = [0, 0, 0, 0, 1, 2, 3, 4, 5, 6];

    mockRandomNumberInRange(randomNumbers);

    // Act
    const carInfo = new CarInfo('suya', 10);
    carInfo.setPosition();

    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(carInfo.getPositionWhen(i));
    }

    // Assert
    expect(result).toEqual(positions);
  });
});
