const { deepFreeze, generateRandomNumberInRange } = require('../src/utils/common');

describe('유틸 함수 테스트', () => {
  test('deepFreeze(object): deepFreeze된 객체 object를 변경하려고 할 경우 타입 에러를 반환한다.', () => {
    const deepObject = {
      prop1: 'value1',
      prop2: {
        prop3: 'value2',
      },
    };

    const freezeObject = () => {
      const frozenDeepObject = deepFreeze(deepObject);
      frozenDeepObject.prop2.prop3 = 'change';
    };

    expect(() => freezeObject()).toThrowError(TypeError);
  });

  test.each([
    [3, 10],
    [-1, 10],
    [0, 1],
    [-30, -2],
  ])(
    'generateRandomNumberInRange($min, $max): $min 이상 $max 미만인 랜덤 숫자를 반환한다.',
    (min, max) => {
      const randomNumber = generateRandomNumberInRange(min, max);

      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThan(max);
    },
  );
});
