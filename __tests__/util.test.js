const { deepFreeze, randomGenerator } = require('../src/utils/common');

describe('유틸 함수 테스트', () => {
  test('deepFreeze(object): 객체 object를 변경할 수 없게 동결한다.', () => {
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
});
