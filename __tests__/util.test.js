const { deepFreeze, randomGenerator } = require('../src/utils/common');

const mockRandoms = (numbers) => {
  Math.random = jest.fn();

  numbers.reduce((acc, cur) => {
    return acc.mockReturnValueOnce(cur);
  }, Math.random);
};

describe('유틸 함수 테스트', () => {
  it('deepFreeze(object): 객체 object를 변경할 수 없게 동결한다.', () => {
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

  describe('randomGenerator', () => {
    it.each([
      [3, 10],
      [-1, 10],
      [0, 1],
      [-30, -2],
      [11, 23],
    ])('getBetween($min, $max): $min 이상 $max 미만인 랜덤 숫자를 반환한다.', (min, max) => {
      mockRandoms([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);

      for (let i = 0; i < 10; i++) {
        const randomNumber = randomGenerator.getBetween(min, max);
        const answer = randomNumber >= min && randomNumber < max;
        expect(answer).toEqual(true);
      }
    });
  });
});
