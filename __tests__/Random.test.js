import { createRandom } from '../src/utils/Random';
test('Random값이 범위 내의 값을 생성하는가?', () => {
  //given
  const min = 0;
  const max = 9;
  //when
  const randomList = [];
  for (let i = 0; i < 100; i++) {
    randomList.push(createRandom());
  }
  //then
  randomList.forEach(data => {
    expect(data).toBeGreaterThanOrEqual(0);
    expect(data).toBeLessThanOrEqual(9);
  });
});

test('Random값이 자연수 값을 생성하는가?', () => {
  //given
  const min = 0;
  const max = 9;
  //when
  const randomList = [];
  for (let i = 0; i < 100; i++) {
    randomList.push(createRandom());
  }

  //then

  randomList.forEach(data => {
    let isNaturalNumber = false;
    if (data % 1 === 0) {
      isNaturalNumber = true;
    }
    expect(isNaturalNumber).toBe(true);
  });
});
