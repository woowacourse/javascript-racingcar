import Race from '../src/domain/Race';

describe('Race 객체 생성의 validation 테스트입니다.', () => {
  test('전진을 시도할 횟수가 양의 정수일 경우 정상적으로 실행된다.', () => {
    // given
    const race = new Race(['pobi', 'conan']);

    // when
    const setRaceStep = () => race.setRaceStep(1);

    // then
    expect(setRaceStep).not.toThrow();
  });

  test.each(['string', true, {}, null, undefined, 10n, 1.11])(
    '전진을 시도할 횟수가 정수가 아닐경우 예외를 던진다.',
    (raceStep) => {
      // given
      const race = new Race(['pobi', 'conan']);

      // when
      const setRaceStep = () => race.setRaceStep(raceStep);

      // then
      expect(setRaceStep).toThrow(Race.STEP_IS_NOT_INTEGER);
    },
  );

  test.each([-1, 0])('전진을 시도할 횟수가 양의 정수가 아닐 경우 예외를 던진다.', (raceStep) => {
    // given
    const race = new Race(['pobi', 'conan']);

    // when
    const setRaceStep = () => race.setRaceStep(raceStep);

    // then
    expect(setRaceStep).toThrow(Race.STEP_IS_NOT_POSITIVE);
  });
});

describe('Race 객체 메서드 테스트입니다.', () => {
  test('isRaceEnd - 레이스가 끝나지 않은 경우 false를 반환한다.', () => {
    // given
    const race = new Race(['pobi', 'conan']);
    const raceStep = 1;

    // when
    race.setRaceStep(raceStep);

    // then
    expect(race.isRaceEnd()).toBe(false);
  });

  test('isRaceEnd - 레이스가 끝난 경우 true를 반환한다.', () => {
    // given
    const race = new Race(['pobi', 'conan']);
    const raceStep = 2;

    // when
    race.setRaceStep(raceStep);
    Array.from({ length: raceStep }).forEach(() => {
      race.moveOneStep();
    });

    // then
    expect(race.isRaceEnd()).toBe(true);
  });
});
