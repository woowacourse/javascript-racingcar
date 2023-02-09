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

## 리팩터링

- [ ] refactor: 매직 넘버 상수화하기

## 테스트 코드

- App.js에 대한 테스트 코드 작성
  - readCarNameCallback 메서드에 대한 테스트 코드
    - [x] test: 자동차 객체 생성 메서드 호출 테스트
    - [x] test: 자동차 객체 생성 이후 readTryCount 메서드 호출 테스트
    - [x] test: 잘못된 값 입력시 OutputView.printErrorMessage 메서드 호출 테스트
    - [x] test: 잘못된 값을 입력시 readCarName 메서드 호출 테스트
    - [ ] test: readCarNameCallback 메서드 전체 호출 테스트
  - readTryCountCallback 메서드에 대한 테스트 코드
  - [x] test: 올바른 값 입력시 moveCar 메서드 호출 테스트
  - [x] test: 잘못된 값 입력시 OutputView.printErrorMessage 메서드 호출 테스트
  - [x] test: 잘못된 값 입력시 readTryCount 메서드 호출 테스트
  - [ ] test: readTryCountCallback 메서드 전체 호출 테스트
- Car.js에 대한 테스트 코드 작성
  - [x] test: move, getStatus 메서드에 대한 테스트 코드
  - [x] test: getWinner 메서드에 대한 테스트 코드
- Validator.js에 대한 테스트 코드 작성
  - 자동차 이름 입력값에 대한 유효성 검사
    - [x] test: 자동차 이름에 공백이 있는 경우
    - [x] test: 자동차 이름 길이 유효성 검사
    - [ ] test: 자동차 이름에 영대문자 유효성 검사
  - 시도 횟수에 대한 유효성 검사
    - [ ] test: 시도 횟수 타입 유효성 검사

## 파일 구조

```bash
├── __test__
│ ├── Car.test.js
├── docs
│ ├── REQUIREMENTS.md
├── src
│ ├── libs
│ │ ├── Console.js
│ │ ├── Constant.js
│ │ ├── generateRandomNumber.js
│ ├── model
│ │ ├── Car.js
│ │ ├── ErrorHandler.js
│ │ ├── Validator.js
│ ├── view
│ │ ├── InputView.js
│ │ ├── OutputView.js
│ ├── App.js
└── README.md
```
