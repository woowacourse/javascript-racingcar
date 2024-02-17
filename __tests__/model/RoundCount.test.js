import Cars from "../../src/collection/Cars";
import Car from "../../src/models/Car";
import RoundCount from "../../src/models/RoundCount";
import gameUtils from "../../src/utils/gameUtils";

const mockRandoms = (numbers) => {
  gameUtils.pickRandomNumber = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, gameUtils.pickRandomNumber);
}

describe('라운드 카운트 검증', () => {
  describe('라운드 카운트 생성 검증', () => {
    test('라운드 입력이 빌 경우 에러 발생', () => {
      // given
      const invalidInput = '';

      expect(() => {
        // when
        new RoundCount(invalidInput);

        // then
      }).toThrow();
    });
    test('라운드 입력이 정수가 아닐 경우 에러 발생', () => {
      // given
      const invalidInput = '-3.5';

      expect(() => {
        // when
        new RoundCount(invalidInput);

        // then
      }).toThrow();
    });
    test('라운드 입력이 1미만일 경우 아닐 경우 에러 발생', () => {
      // given
      const invalidInput = '-3';

      expect(() => {
        // when
        new RoundCount(invalidInput);

        // then
      }).toThrow();
    });
    test('라운드 입력이 10 초과인 경우 아닐 경우 에러 발생', () => {
      // given
      const invalidInput = '11';

      expect(() => {
        // when
        new RoundCount(invalidInput);

        // then
      }).toThrow();
    });
    test('라운드 입력이 올바를 경우 라운드 카운트 객체가 생성된다.', () => {
      // given
      const invalidInput = '8';
      
      // when
      const roundCount = new RoundCount(invalidInput);

      // then
      expect(roundCount instanceof RoundCount).toBeTruthy();
    });
  });
  describe('자동차 전진 통합테스트', () => {
    // given
    const sundayCar = new Car('썬데이');
    const cookieCar = new Car('쿠키');
    const cars = new Cars([sundayCar, cookieCar]);
    const roundCount = new RoundCount('2');
    const randomNumbers = [3, 4, 4, 5];
    mockRandoms(randomNumbers);

    test('게임이 두 번 진행되고, 썬데이가 3, 4 쿠키가 4, 5의 수를 받으면 스코어가 썬데이는 1, 쿠키는 2다.', () => {
      // given   
      const answer = [
        [ '썬데이 : ', '쿠키 : -' ],
        [ '썬데이 : -', '쿠키 : --' ],
      ];
    
      // when
      roundCount.raceStart(cars);

      // then
      expect(roundCount.makeRaceResultOutput()).toEqual(answer);
    });
  });
});
