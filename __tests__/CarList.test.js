import CONDITIONS from '../src/constants/Conditions';
import CarList from '../src/entities/CarList';

describe('CarList 테스트', () => {
  describe('랜덤 값이 주어졌을때,', () => {
    let carList;

    beforeEach(() => {
      const CAR_NAMES = 'pen, apple, car3';
      carList = new CarList(CAR_NAMES);
    });

    test('4 미만의 값이 주어지면, 정지하여야 한다.', () => {
      // Arrange
      const MOVE_RANDOM_NUMBERS = [0, 1, 3];
      const POSITIONS = [0, 0, 0];
      carList.progress(MOVE_RANDOM_NUMBERS);

      // Act
      const positions = carList.getPositions();

      // Assert
      expect(positions).toEqual(POSITIONS);
    });

    test('4 이상의 값이 주어지면, 전진하여야 한다.', () => {
      // Arrange
      const STOP_RANDOM_NUMBERS = [4, 5, 9];
      const POSITIONS = [1, 1, 1];
      carList.progress(STOP_RANDOM_NUMBERS);

      // Act
      const positions = carList.getPositions();

      // Assert
      expect(positions).toEqual(POSITIONS);
    });
  });
});
