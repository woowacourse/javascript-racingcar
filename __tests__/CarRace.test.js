import CarRace from '../src/Model/CarRace';

/* eslint-disable */
describe('CarRace 객체 테스트', () => {
  let carRace;

  beforeEach(() => {
    carRace = new CarRace();
  });

  test('이름이 중복되었다면 에러를 던져야한다.', () => {
    // Arrange
    const names = ['러기', '러기', '리버'];
    // Action
    expect(() => carRace.setCarsByCarNames(names))
      // Assert
      .toThrow('[ERROR] 중복된 이름이 있습니다.');
  });

  test('이름에 공백이 있다면 에러를 던져야 한다.', () => {
    // Arrange
    const names = ['러기', ' ', '리버'];
    // Action
    expect(() => carRace.setCarsByCarNames(names))
      // Assert
      .toThrow('[ERROR] 이름에는 공백이 없어야 합니다');
  });

  test.each([[0], [201], [-5]])('시도할 횟수는 1이상 200이하가 아니면 에러를 던져야한다.', (number) => {
    // Arrange

    // Action
    expect(() => carRace.setTryNum(number))
      // Assert
      .toThrow('[ERROR] 1 이상 200미만의 숫자만 입력해주세요.');
  });

  test.each([
    [['러기', '리버', '헤일리'], [5, 4, 3], ['러기']],
    [
      ['러기', '리버', '헤일리'],
      [5, 4, 5],
      ['러기', '헤일리'],
    ],
    [['러기', '리버'], [0, 0, 0], []],
  ])(
    'calculateWinners메서드는 가장 많이 이동한 자동차가 리턴된다. (이동한 거리가 0일땐 우승자 없음)',
    (names, distances, winner) => {
      //Arrange
      carRace.setCarsByCarNames(names);
      const cars = carRace.getCars();
      cars.forEach((car, index) => {
        const distance = distances[index];
        for (let i = 0; i < distance; i += 1) {
          car.move(4);
        }
      });
      //Action
      expect(carRace.calculateWinners(cars).winners.map((car) => car.getName()))
        //Assert
        .toStrictEqual(winner);
    },
  );
});
