import ERROR_MESSAGE from '../src/error/message.js';
import Cars from '../src/model/Cars.js';
<<<<<<< HEAD
import { mockRandoms } from './Car.test.js';
=======
>>>>>>> fca13fe (test: Cars 이름 문자열 예외 테스트 작성)

// Cars validate 메소드 테스트
describe('Cars 이름 문자열 테스트', () => {
  // 예외 테스트
  test.each`
    testTitle                      | carNames              | expected
    ${'빈 칸이 들어온 경우'}       | ${''}                 | ${ERROR_MESSAGE.nameLength}
    ${'중복된 이름이 들어온 경우'} | ${'pobi,pobi,  pobi'} | ${ERROR_MESSAGE.duplicated}
  `(
    '$testTitle테스트는 $carNames이 입력되면 $expected 에러를 던진다.',
    ({ carNames, expected }) => {
      expect(() => new Cars(carNames)).toThrow(expected);
    },
  );
});

// Cars play 메소드 테스트
describe('Cars 한 라운드 테스트', () => {
  test('한 번의 라운드에서 모든 자동차가 올바르게 전진하고 정지하는지 테스트', () => {
    // given
    const cars = new Cars('pobi,jun,cron');
    const FORWARD = 9;
    const STOP = 0;
    mockRandoms([FORWARD, STOP, FORWARD]);
    const output = [
      { name: 'pobi', location: 1 },
      { name: 'jun', location: 0 },
      { name: 'cron', location: 1 },
    ];

    // when
    const roundResult = cars.play();

    // then
    roundResult.forEach((car, i) => {
      expect(car.name).toEqual(output[i].name);
      expect(car.location).toEqual(output[i].location);
    });
  });
});

// Cars winners 메소드 테스트
describe('Cars 우승자 테스트', () => {
  test('모든 라운드가 끝나고 올바르게 우승자를 반환하는지 테스트', () => {
    // given
    const cars = new Cars('pobi,jun,cron');
    const FORWARD = 9;
    const STOP = 0;
    mockRandoms([FORWARD, STOP, FORWARD, FORWARD, STOP, FORWARD]);
    const round = 2;
    const output = ['pobi', 'cron'];

    // when
    for (let i = 0; i < round; i++) cars.play();

    cars.winners().forEach((name, i) => expect(name).toEqual(output[i]));
  });
});
