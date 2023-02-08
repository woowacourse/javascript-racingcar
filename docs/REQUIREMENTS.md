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

- [ ] feat: 자동차 경주 게임의 우승자 출력하기
  - 우승자가 여러명일 경우 ','를 이용하여 구분한다.

## 파일 구조

├── **test**
│ ├── Car.test.js
├── docs
│ ├── REQUIREMENTS.md
├── node_modules
├── src
│ ├── libs
│ │ ├── Constant.js
│ │ ├── MoveRandomNumberGenerator.js
│ ├── model
│ │ ├── Car.js
│ │ ├── ErrorHandler.js
│ │ ├── Validation.js
│ ├── view
│ │ ├── InputView.js
│ │ ├── OutputView.js
│ ├── App.js
└── README.md
