import Car from '../src/domain/Car';

describe('Car 객체 생성의 validation 테스트입니다.', () => {
  test(`자동차의 이름은 최소${Car.MIN_NAME_LENGTH}자 이상이어야 한다.`, () => {
    // given
    const emptyCarName = '';

    // when
    const createEmptyNameCar = () => new Car(emptyCarName);

    // then
    expect(createEmptyNameCar).toThrow(Car.VALID_NAME_LENGTH);
  });

  test(`자동차의 이름은 최대${Car.MAX_NAME_LENGTH}자 이상이어야 한다.`, () => {
    // given
    const longName = 'conana';

    // when
    const createLongNameCar = () => new Car(longName);

    // then
    expect(createLongNameCar).toThrow(Car.VALID_NAME_LENGTH);
  });
});

describe('Car 객체의 메서드 테스트입니다.', () => {
  test('move - 자동차는 움직일 수 있다.', () => {
    // given
    const car = new Car('conan');
    const moveCount = 3;

    // when
    Array.from({ length: moveCount }).forEach(() => {
      car.move();
    });

    // then
    const { position } = car.getRaceState();

    expect(position).toBe(3);
  });

  test('getRaceState - 자동차의 경주 상황을 객체로 반환한다.', () => {
    // given
    const car = new Car('conan');
    const moveCount = 3;

    // when
    Array.from({ length: moveCount }).forEach(() => {
      car.move();
    });

    // then
    expect(car.getRaceState()).toEqual({ name: 'conan', position: 3 });
  });

  test('compareTo - 다른 Car 객체와 위치를 비교해 멀리 간 Car 객체를 반환한다.', () => {
    // given
    const pobi = new Car('pobi');
    const conan = new Car('conan');

    // when
    pobi.move();

    // then
    expect(pobi.compareTo(conan)).toBe(pobi);
  });

  test('isSamePosition - 다른 Car 객체와 위치가 같으면 true를 반환한다.', () => {
    // given
    const pobi = new Car('pobi');
    const conan = new Car('conan');

    // when
    pobi.move();
    conan.move();

    // then
    expect(pobi.isSamePosition(conan)).toBe(true);
  });

  test('isSamePosition - 다른 Car 객체와 위치가 다르면 false를 반환한다.', () => {
    // given
    const pobi = new Car('pobi');
    const conan = new Car('conan');

    // when
    pobi.move();

    // then
    expect(pobi.isSamePosition(conan)).toBe(false);
  });

  test('getName - Car 객체의 name을 반환한다.', () => {
    // given
    const conan = new Car('conan');

    // when

    // then
    expect(conan.getName()).toBe('conan');
  });
});
