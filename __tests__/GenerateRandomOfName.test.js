import generateRandomOfName from '../src/domain/services/generateRandomOfName';

describe('임의의 이름 지정 테스트', () => {
  test('이름 리스트에 공백 문자열이 존재할 경우, user1과 같이 임의의 이름을 부여한다.', () => {
    const testValue = ['', 'soha', 'pobi', ''];
    const expectedResult = ['user1', 'soha', 'pobi', 'user2'];

    expect(generateRandomOfName(testValue)).toEqual(expectedResult);
  });
});
