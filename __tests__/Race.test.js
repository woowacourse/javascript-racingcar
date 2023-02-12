import Race from '../src/domain/Race';

describe('Race 객체 생성의 validation 테스트입니다.', () => {
  test('전진을 시도할 횟수는 정수여야한다. - 숫자가 아닐 경우', () => {
    // given
    const race = new Race(['pobi', 'conan']);
    const raceStep = 'not number';

    // when
    const setRaceStep = () => race.setRaceStep(raceStep);

    // then
    expect(setRaceStep).toThrow(Race.STEP_IS_NOT_INTEGER);
  });

  test('전진을 시도할 횟수는 정수여야한다. - 소수일 경우', () => {
    // given
    const race = new Race(['pobi', 'conan']);
    const raceStep = 1.11;

    // when
    const setRaceStep = () => race.setRaceStep(raceStep);

    // then
    expect(setRaceStep).toThrow(Race.STEP_IS_NOT_INTEGER);
  });

  test('전진을 시도할 횟수는 양의 정수여야 한다. - 음수일 경우', () => {
    // given
    const race = new Race(['pobi', 'conan']);
    const raceStep = -1;

    // when
    const setRaceStep = () => race.setRaceStep(raceStep);

    // then
    expect(setRaceStep).toThrow(Race.STEP_IS_NOT_POSITIVE);
  });

  test('전진을 시도할 횟수는 양의 정수여야 한다. - 0일 경우', () => {
    // given
    const race = new Race(['pobi', 'conan']);
    const raceStep = 0;

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
    race.setRaceStep(raceStep);

    // when

    // then
    expect(race.isRaceEnd()).toBe(false);
  });

  test('isRaceEnd - 레이스가 끝난 경우 true를 반환한다.', () => {
    // given
    const race = new Race(['pobi', 'conan']);
    const raceStep = 2;
    race.setRaceStep(raceStep);

    // when
    Array.from({ length: raceStep }).forEach(() => {
      race.moveOnce();
    });

    // then
    expect(race.isRaceEnd()).toBe(true);
  });
});
