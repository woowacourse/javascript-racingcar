# javascript-racingcar

## 기능 요구사항

자동차 경주 게임을 구현한다.

- [x] 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- [x] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [x] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- [x] 사용자가 잘못된 입력 값을 작성한 경우 에러 메시지를 보여주고, 다시 입력할 수 있게 한다.

## 🎯 리팩토링 요구 사항(2단계)

- 도메인 로직은 `domain/` 하위로, UI 관련 로직은 `view/` 하위에서 관리한다.
- `domain/` 하위의 모듈은 `view/` 하위의 모듈을 의존하지 않아야 한다.
- 도메인 로직 내에서 테스트하기 어려운 부분을 분리하고, 테스트 가능한 부분에 대해서만 단위 테스트를 작성한다.
  - 테스트 코드에서 `jest.fn()`을 사용하지 않는다. (마찬가지로, mock/spy 등도 이번 미션에서는 사용하지 않는다.)

## 구현 목록

### 입출력 함수 구현

- 코드스니펫 이용 입력 함수 구현
- 출력 함수 구현

### 자동차

- 자동차는 5자 이하의 이름을 가진다.
- 자동차는 이동 거리를 가지고 있다.
- 자동차는 움직인다.
  - 자동차에게 주어지는 값이 4 이상일 경우 움직인다.
  - 그 외의 경우는 멈춘다.
- 자동차의 현재 이동 거리를 문자열로 반환한다.

### 자동차 경주

- 자동차 객체 리스트와 경주 횟수 정보를 담는다.
- 자동차 객체 중 가장 멀리 간 자동차를 선정할 수 있다.
  - 우승자가 여러 명인 경우 쉼표를 이용해 구분한다.
- 자동차 경주를 진행한다.
  - 경주를 몇 번 진행할지 숫자로 입력받는다.
  - 자동차에게 주어지는 값을 무작위로 생성한다.(0~9)
  - 경주가 진행되는 상황을 출력할 수 있다.

### 입력에 대한 검증

- 콘솔에 에러 메시지 출력 후, 재입력을 받는다.
- 경주에 참여하는 자동차의 이름들을 입력받는다.
  - 중복이 되면 안된다.
  - 자동차 이름 중 공백이 있으면 안된다.
  - 자동차 이름은 5자 이하여야 한다.
  - 자동차 이름은 알파벳으로 구성되어야 한다.
  - 자동차는 두 대 이상이어야 한다.
- 경주를 진행할 횟수를 입력받는다.
  - 횟수는 문자를 입력받으면 안된다.
  - 횟수는 공백을 입력받으면 안된다.
  - 횟수가 1보다 작으면 안된다.
  - 횟수는 최대 1000이다.

### 통합

- 구현한 모든 단위를 이용해 자동차 경주 게임을 구현한다.

### 리팩토링

- constants에 상수 분리
- 함수의 역할을 더욱 명확하게 하기 위한 분리
  - Racing.start() 함수
  - default 함수와 파일명 일치

## 규칙

1. 모든 단위 구현은 단위 테스트 작성 먼저
2. Commit Message는 AngularJS를 따름

- 예시) feat: 입력 함수 구현

3. Airbnb 자바스크립트 스타일 가이드를 따름
