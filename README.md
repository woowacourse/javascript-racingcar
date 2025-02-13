# javascript-racingcar

### 🐥 니야와 호이초이의 페어 프로그래밍

## 🎯 기능 요구 사항

- [x] 자동차에 이름을 부여할 수 있다.
- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [x] 사용자가 잘못된 입력 값을 작성한 경우 에러 메시지를 보여주고, 다시 입력할 수 있게 한다.
- [x] 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- [x] 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

## 예외 사항

자동차 입력에 대한 유효성 검사

- [x] 자동차 이름 1자 이상 ~ 5자 이하
- [x] 자동차 이름 전체가 공백인 경우
- [x] 자동차 이름이 중복되는 경우

시도횟수 입력에 대한 유효성 검사

- [x] 자연수(양의 정수)가 아닌 경우
- [x] 0이하인 경우

## 입력

- [x] 자동차 이름들 입력
- [x] 시도 횟수 입력

## 출력

- [x] 자동차 경주 내역 출력
- [x] 최종 우승자 출력

## 리팩토링

- [x] 입출력 따로 관리 (Console 객체)
- [x] 함수 길이 15 제한
- [x] indent depth 2 제한
- [x] 상수 처리
- [x] Controller 분리 (Game, Race)

## 단위 테스트

- [x] Car 클래스 테스트
- [ ] RaceController 클래스 테스트
- [x] validateCarNames 테스트
- [x] validateTryCount 테스트
