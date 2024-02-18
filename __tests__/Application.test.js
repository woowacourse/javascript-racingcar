import Cars from '../src/collection/Cars';
import { Car } from '../src/domain';
import App from './../src/App';
import { getLogSpy, mockQuestions, mockRandoms } from "./utils/testUtils";

describe('자동차 통합테스트', () => {
  test('썬데이가 3 쿠키가 4 랜덤 수를 받으면 스코어가 썬데이는 0, 쿠키는 1의 값이 나온다.', () => {
    // given
    const sundayCar = new Car('썬데이');
    const cookieCar = new Car('쿠키');
    const cars = new Cars([sundayCar, cookieCar]);
    const randomNumbers = [3, 4];
    mockRandoms(randomNumbers);
    const answer = [
      { name: '썬데이', score: 0 },
      { name: '쿠키', score: 1 },
    ];

    // when
    const roundResult = cars.roundStart();

    // then
    expect(roundResult).toEqual(answer);
  });
});

describe('자동차 경주 테스트', () => {
  test('경기는 2번, 랜덤 값을 썬데이가 4, 7, 쿠키가 5, 8을 받으면 썬데이와 쿠키가 공동우승자로 출력된다.', async () => {
    // given
    const inputs = ["썬데이,쿠키", '2'];
    const randomNumbers = [4, 7, 5, 8];
    const logSpy = getLogSpy();
    const answer = '최종 우승자: 썬데이, 쿠키';

    mockQuestions(inputs);
    mockRandoms([...randomNumbers]);

    // when
    await App.init();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(answer));
  });
});
