import { validator } from '../src/utils/validator';

describe('경주에 참여하는 자동차의 이름들을 검증한다.', () => {
  test('중복이 되면 안된다.', () => {
    const carNames = ['a', 'b', 'a'];

    expect(() => {
      validator.carNames(carNames);
    }).toThrow('중복된 이름이 존재합니다.');
  });

  test('5자 이상이면 안된다.', () => {
    const carNames = ['a', 'b', 'cdefgd'];

    expect(() => {
      validator.carNames(carNames);
    }).toThrow('이름은 5자 이하여야 합니다.');
  });

  test('자동차 이름 중 공백이 있으면 안된다.', () => {
    const carNames = ['a', 'b b', 'c'];

    expect(() => {
      validator.carNames(carNames);
    }).toThrow('공백이 포함된 이름이 존재합니다.');
  });

  test('자동차 이름은 알파벳으로 구성되어야 한다.', () => {
    const carNames = ['a', 'b', 'c1'];

    expect(() => {
      validator.carNames(carNames);
    }).toThrow('알파벳으로 구성되어야 합니다.');
  });

  test('자동차는 두 대 이상이어야 한다.', () => {
    const carNames = ['a'];

    expect(() => {
      validator.carNames(carNames);
    }).toThrow('두 대 이상이어야 합니다.');
  });
});

describe('경주를 진행할 횟수를 검증한다.', () => {});
