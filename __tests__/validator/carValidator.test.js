import { CAR_CONSTANTS } from '../../src/constanst';
import CarValidator from '../../src/validator/carValidator';

describe('CarValidator 객체 테스트', () => {
  const { NAME_LENGTH_RANGE } = CAR_CONSTANTS;

  describe(`Car 이름은 ${NAME_LENGTH_RANGE.min}~${NAME_LENGTH_RANGE.max}자여야 한다.`, () => {
    test.each([['가'], ['가나다라마']])('엣지) "%s"라는 이름의 길이는 경계값이므로 에러가 나지 않아야한다.', (name) => {
      expect(() => CarValidator.checkCarName([name])).not.toThrow();
    });

    test.each([['여섯글자지롱']])('예외) "%s"라는 이름은 길이는 범위를 벗어났으므로 에러가 나야한다.', (name) => {
      expect(() => CarValidator.checkCarName([name])).toThrow();
    });
  });

  test.each([['다니엘', '다니엘', '리버']])('"%s,%s,%s"처럼 중복된 이름이 있으면 에러가 나야한다.', (names) => {
    expect(() => CarValidator.checkCarName(names)).toThrow();
  });

  test.each(['1번 선수'])('"%s"처럼 이름 중간에 공백이 들어가면 에러가 나야한다.', () => {
    expect(() => CarValidator.checkCarName(includesSpaceName)).toThrow();
  });
});
