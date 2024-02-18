import CONDITIONS from '../src/constants/Conditions';
import Car from '../src/entities/Car';

describe('Car 테스트', () => {
  test.each(['jade', 'Fe', 'ruler'])('성공 케이스', carName => {
    expect(() => new Car(carName)).not.toThrow();
  });

  test.each(['jade ', ' Fe', 'ruler'])(
    '앞 뒤에 공백을 포함한 이름을 입력했을 때, trim() 후 정상 인정한다.',
    carName => {
      expect(() => new Car(carName)).not.toThrow();
    },
  );

  test.each(['pencil', 'woowacourse'])('5자 초과이름을 입력했을 때, 에러를 발생시킨다.', carName => {
    expect(() => new Car(carName)).toThrow('[ERROR]');
  });

  test.each(['', ' '])('공란, 공백을 입력했을 때, 에러를 발생시킨다.', carName => {
    expect(() => new Car(carName)).toThrow('[ERROR]');
  });
});
