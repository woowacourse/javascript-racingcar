import { CarValidator, RoundValidator } from '../src/models';

describe('자동차 관련 유효성 검사 테스트', () => {
  describe('참여 자동차가 여러 대일 경우 쉼표로 자동차 구분', () => {
    test('쉼표로 자동차를 구분 한 경우,오류가 출력되지 않음 ', () => {
      const input = 'a,b,c';
      expect(() => CarValidator.validate(input)).not.toThrow();
    });

    test('쉼표로 자동차를 구분하지 않은 경우 오류 출력', () => {
      const input = 'a b c';
      expect(() => CarValidator.validate(input)).toThrow();
    });
  });

  describe('참여자(자동차) 리스트에 중복 원소 여부 테스트', () => {
    test('참여자(자동차) 리스트에 중복되는 원소가 없을 때', () => {
      const input = 'a,b,c';
      expect(() => CarValidator.validate(input)).not.toThrow();
    });

    test('참여자(자동차) 리스트에 중복되는 원소가 있을 때', () => {
      const input = 'a,a';
      expect(() => CarValidator.validate(input)).toThrow();
    });
  });

  describe('참여자(자동차)의 수 테스트', () => {
    test('참여자(자동차)의 수가 1~5 사이 값일 때', () => {
      const input = 'a';
      expect(() => CarValidator.validate(input)).not.toThrow();
    });

    test('참여자(자동차)의 수가 1~5 사이 값이 아닐 때', () => {
      const input = 'a,b,c,d,e,f';
      expect(() => CarValidator.validate(input)).toThrow();
    });
  });

  describe('참여자(자동차)의 이름이 영어, 한글로 5글자 이내인지 확인하는 테스트', () => {
    test('참여자(자동차)의 이름 조건에 맞을 때', () => {
      const input = 'abc';
      expect(() => CarValidator.validate(input)).not.toThrow();
    });

    test('참여자(자동차)의 이름 조건에 맞지 않을 때', () => {
      const input = 'abcdef33';
      expect(() => CarValidator.validate(input)).toThrow();
    });
  });
});

describe('진행횟수 관련 유효성 검사 테스트', () => {
  test('진행횟수가 1~5 사이의 값일 때', () => {
    const roundNumber = '4';
    expect(() => RoundValidator.validateRound(roundNumber)).not.toThrow();
  });

  test('진행횟수가 1~5 사이의 값이 아닐 때', () => {
    ['a12', '6'].forEach((input) => {
      expect(() => RoundValidator.validateRound(input)).toThrow();
    });
  });
});
