## 구현기능목록

#### Console 객체 생성

- [x] feat: readLine 구현
- [x] feat: print 구현
- [x] feat: close 구현

#### 자동차 객체 생성

- [x] feat: 자동차 이름 입력받기
- 예외처리:
  - [x] feat: 자동차 이름이 5자 이하가 아닐 경우 예외처리
  - [x] feat: 자동차 이름이 영소문자가 아닐 경우 예외처리
  - [x] feat: 자동차 이름에 공백이 포함되면 예외처리
  - [x] feat: 자동차 이름이 중복될 경우 예외처리
- [x] feat: 예외 발생 시 자동차 이름 재입력받기
- [x] feat: 입력 받은 자동차 객체 생성

#### 자동차 경주 게임 진행

- [x] feat: 시도 횟수 입력받기
- 예외처리:
  - [x] feat: 시도 횟수가 숫자가 아닐 경우 예외처리
- [x] feat: 예외 발생 시 시도 횟수 재입력받기
- [x] feat: 시도 횟수마다 자동차가 전진 했는지 판단하기
  - Math.Random을 활용하여 0이상 3이하의 숫자이면 정지 4이상 9이하의 숫자이면 전진
- [x] feat: 자동차 이동하기
- [x] feat: 자동차 경주 게임결과 출력 하기
  - 각 횟수마다 결과를 출력한다.
  - 자동차를 출력할 때 자동차 이름을 같이 출력한다.

#### 자동차 경주 게임 완료

- [x] feat: 자동차 경주 게임의 우승자 출력하기
  - 우승자가 여러명일 경우 ', '를 이용하여 구분한다.
- [x] feat: 게임 종료하기

## 테스트 코드

- App.js에 대한 테스트 코드 작성
  - readCarNameCallback 메서드에 대한 테스트 코드
    - [x] test: 자동차 객체 생성 메서드 호출 테스트
    - [x] test: 자동차 객체 생성 이후 readTryCount 메서드 호출 테스트
    - [x] test: 잘못된 값 입력시 OutputView.printErrorMessage 메서드 호출 테스트
    - [x] test: 잘못된 값을 입력시 readCarName 메서드 호출 테스트
  - readTryCountCallback 메서드에 대한 테스트 코드
  - [x] test: 올바른 값 입력시 moveCar 메서드 호출 테스트
  - [x] test: 잘못된 값 입력시 OutputView.printErrorMessage 메서드 호출 테스트
  - [x] test: 잘못된 값 입력시 readTryCount 메서드 호출 테스트
- Car.js에 대한 테스트 코드 작성
  - [x] test: move, getStatus 메서드에 대한 테스트 코드
  - [x] test: getWinner 메서드에 대한 테스트 코드
- Validator.js에 대한 테스트 코드 작성
  - 자동차 이름 입력값에 대한 유효성 검사
    - [x] test: 자동차 이름에 공백이는 경우
    - [x] test: 자동차 이름 길이 유효성 검사
    - [x] test: 자동차 이름이 영소문자로만 이루어지지 않은 경우
    - [x] test: 자동차 이름이 중복된 경우
  - 시도 횟수에 대한 유효성 검사
    - [x] test: 시도 횟수 타입 유효성 검사

## 리팩터링

- [x] refactor: 자동차 객체 생성 메서드 분리
- [x] refactor: 난수생성함수를 난수생성객체로 수정
- [x] refactor: 매직넘버 상수화
- [x] refactor: 테스트 코드 리팩터링

## 1차 코드 리뷰 리팩터링

- [x] refactor: 함수의 이름이 함수가 하는 동작과 동일하게 하기
  - 함수의 이름을 보고 해당 함수가 하는 역할을 짐작할 수 있도록 한다.
- [x] refactor: 하나의 함수(또는 메서드)가 많은 일을 하지 않도록 하기
  - 여러 역할을 하는 메서드를 분리하여 하나의 일만 하도록 한다.
- [x] refactor: 불필요한 메서드를 제거하기
  - 객체에 어울리지 않는 메서드는 제거한다.
  - 해당 기능을 다른 객체에서 수행하도록 한다.
- [x] refactor: 메서드가 다른 메서드를 호출하는 트리거의 역할을 제거하기
- [x] refactor: 호출에 대한 테스트 코드 제거
  - 유저가 프로그램을 사용하는 가정하에 필요한 동작 위주로 테스트 코드를 작성한다.
- [x] refactor: 자동차 생성 메소드 호출 제거 및 carsStatus 인자 전달하기

## step2 기능 목록 및 리팩터링 목록

- [x] feat: 자동차 이름이 공백일 경우 에러 반환하기
- [x] refactor: 도메인 로직과 UI 로직 폴더 분리하기
- [x] refactor: ES6 모듈 적용하기
- [x] refactor: 유효성 검사 메서드 이름 수정하기
  - 이름을 통해 해당 메서드가 하는 역할을 알 수 있도록 한다.
- [x] refactor: 자동차 게임을 관리하는 객체 만들기
  - 해당 객체에서 자동차 객체를 관리한다.
  - 해당 객체에서 자동차 게임의 전반적인 역할을 담당한다.
- [x] refactor: 자동차 객체 생성을 GameManager에서 실행하기
- [ ] refactor: GameManager에 시도횟수 저장하기
- [ ] refactor: 자동차의 이동을 GameManager에서 실행하기
- [ ] refactor: 자동차의 상태를 가져오기 위한 함수를 GameManager에서 실행하기
- [ ] refactor: 명령형 프로그래밍을 선언형 프로그래밍으로 수정하기

## 파일 구조

```bash
├── __test__
│ ├── App.test.js
│ ├── Car.test.js
│ ├── Validator.test.js
├── docs
│ ├── REQUIREMENTS.md
├── src
│ ├── libs
│ │ ├── Console.js
│ │ ├── Constant.js
│ │ ├── GenerateRandomNumber.js
│ ├── model
│ │ ├── Car.js
│ │ ├── Validator.js
│ ├── view
│ │ ├── InputView.js
│ │ ├── OutputView.js
│ ├── App.js
└── README.md
```
