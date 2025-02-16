# 🚗 javascript-racingcar

## 🐥 `Step1` 니야와 호이초이의 페어 프로그래밍 🐥

### ✅ 기능 요구 사항

- [x] 자동차에 이름을 부여할 수 있다.
- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [x] 사용자가 잘못된 입력 값을 작성한 경우 에러 메시지를 보여주고, 다시 입력할 수 있게 한다.
- [x] 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- [x] 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

### ✅ 예외 사항

**자동차 입력에 대한 유효성 검사**

- [x] 자동차 이름 1자 이상 ~ 5자 이하
- [x] 자동차 이름 전체가 공백인 경우
- [x] 자동차 이름이 중복되는 경우
- [x] 자동차가 1대인 경우

**시도횟수 입력에 대한 유효성 검사**

- [x] 자연수(양의 정수)가 아닌 경우
- [x] 0 이하인 경우
- [x] 50 초과인 경우

### ✅ 입력

- [x] 자동차 이름들 입력
- [x] 시도 횟수 입력

### ✅ 출력

- [x] 자동차 경주 내역 출력
- [x] 최종 우승자 출력

### ✅ 리팩토링

- [x] 입출력 따로 관리 (Console 객체)
- [x] 함수 길이 15 제한
- [x] indent depth 2 제한
- [x] 상수 처리
- [x] Controller 분리 (Game, Race)

### ✅ 단위 테스트

- [x] Car 클래스 테스트
- [x] RaceController 클래스 테스트
- [x] validateCarNames 테스트
- [x] validateTryCount 테스트

### ⚙️ 폴더 구조 (`Step1` - 리팩토링 전)

```
.
├── README.md
├── 📂 __tests__
│   ├── Car.test.js
│   ├── RaceController.test.js
│   ├── validateCarNames.test.js
│   └── validateTryCount.test.js
├── 📂 docs
│   ├── pair-programming-tip.md
│   ├── pair-rule.md
│   └── retrospect.md
└── 📂 src
    ├── 📂 constants
    │   └── constants.js
    ├── 📂 controllers
    │   ├── GameController.js
    │   └── RaceController.js
    ├── index.js
    ├── 📂 models
    │   └── Car.js
    ├── 📂 utils
    │   ├── Console.js
    │   └── randomNumber.js
    ├── 📂 validations
    │   ├── validateCarNames.js
    │   └── validateTryCount.js
    └── 📂 views
        ├── Input.js
        └── Output.js

```

### 🧩 실행 로직 도식화 (`Step1` - 리팩토링 전)

```
index.js -> GameController 인스턴스 생성 후, play() (게임 시작)
.
├── GameController
├── readAndValidateInputs (입력값 받기)
├── RaceController (입력값(자동차들, 시도횟수) 바탕으로 경주)
│  ├── race (경주 시작)
│  │   └── round (라운드 별 진행)
│  └── getWinners (우승자 선별)
└── printWinner (우승자 출력)
```

### 🛠️ 설계 이유

**✔️ 개별 Car 클래스 생성 및 관리**

```
프리코스 때는 우리 둘 다 Cars 라는 클래스에서 모든 자동차의 정보를 한 번에 관리했었다.
근데 이번에는 각 자동차별로 name과 count 값을 관리하는 각각의 인스턴스를 생성해서 관리하도록 진행했다.
그러다보니 외부에서 전체 자동차에 대한 인스턴스를 관리해주어야 했다.
```

**✔️ Controller 분리 (GameController와 RaceController)**

```
처음에는 입출력과 유효성 검증 로직과 전체 경주를 실행하고 최종 우승자를 추출하는 로직이 모두 하나의 Controller에서 관리되고 있었다.
이렇게 하나의 Controller에서 관리하다보니 코드가 길어지고 기능이 많아져서 응집도가 높아졌다.
그래서 자동차 경주를 실행하는 로직 자체를 분리하고자 하였다. 결론적으로 아래와 같이 분류하게 되었다.

- GameController: 게임 자체에 대한 전체 실행 로직 관리
- RaceController: 시도횟수에 따른 각각의 경주를 실행하고 우승자를 추출하는 로직 관리
```

**✔️ 입출력 로직 Console 객체로 관리**

```
처음에는 console.log()와 readLineAsync()를 별도로 사용하고 있었다.
그러나 직관적으로 입출력 로직임을 인지하기 어려웠고, 사용 방식에도 일관성이 부족하다고 느꼈다.
이에 따라 입출력 역할만을 담당하는 Console 객체를 만들어 메서드로 관리하면, 우테코에서 제공해준 라이브러리처럼 명확하게 '입출력 책임을 분리했다'는 느낌을 줄 수 있겠다고 생각했다.
이후 모든 입출력 처리를 Console.print()와 Console.readLineAsync() 등 메서드로 일관되게 사용하도록 변경했다.
```

## 🐥 `Step2` 니야의 자동차 경주 리팩토링 🐥

### 📌 리팩토링 및 문서 정리

- [x] models -> domains 로 폴더 네이밍 변경하기.
- [x] Input 재사용 코드 분리하기.
- [x] validate(domain)와 Input(UI) 분리하기.
- [x] 전반적인 메소드명, 필드명, 변수명에 대해서 적절한지 다시 고민하기. (e.g., round, randomNumber, etc.)
- [x] validateCarNames에서 자동차 이름 입력시 구분자(,)로 인해 빈 값이 나오는 경우 무시 처리하기.
- [x] validate 메서드가 너무 길어서 조건문 별로 어떤 유효성 검사를 하는지 분리하면 좋을 듯함.
- [x] validate 내부에서 조건문에 따른 에러 던지는 로직 유틸로 분리하여 재사용하기.
- [x] getWinners() 메서드가 두 개 이상의 일을 하고 있음.
- [x] 행위 주도 개발(BDD) 방식으로 Car 클래스 테스트 명세 수정하기.
- [x] 상수 메시지나 테스트 케이스에서 사용되는 매직 넘버들 모두 상수화하기.
- [x] 응집도 관련하여 EXPRESSION_FLAG 상수의 위치가 어디에 있는 것이 좋은지 고민해보기.
- [x] getRandomNumber 재사용 가능하도록 범위 설정 값 매개변수로 입력받기.
- [x] RaceController 역할 재정의하기.
- [x] jest.fn(), jest.mock(), jest.spyOn() 사용하지 않기.
- [x] 재입력 받는 로직에서 while문과 재귀 호출 방식의 차이점에 대해 고민하고 더 효율적인 방식 채택하기.
- [x] 동일한 cars로 replay 버튼이 생긴다면 어떻게 대응할 것인지 확장성 고려해서 Controller 리팩토링하기.

### ⚙️ 폴더 구조 (`Step2` - 리팩토링)

```
.
├── README.md
├── 📂 __tests__
│   ├── Car.test.js
│   ├── getMaxCount.test.js
│   ├── getWinners.test.js
│   ├── validateCarNames.test.js
│   └── validateTryCount.test.js
├── 📂 docs
│   ├── BDD.md
│   ├── pair-programming-tip.md
│   ├── pair-rule.md
│   ├── recursion-vs-while.md
│   ├── retrospect.md
│   └── troubleshooting-race-controller.md
└── 📂 src
    ├── 📂 constants
    │   └── constants.js
    ├── 📂 controllers
    │   └── GameController.js
    ├── 📂 domains
    │   └── Car.js
    ├── index.js
    ├── 📂 utils
    │   ├── Console.js
    │   ├── getMaxCount.js
    │   ├── getRandomNumber.js
    │   ├── getValidInput.js
    │   ├── getWinners.js
    │   └── throwErrorIfInvalid.js
    ├── 📂 validations
    │   ├── validateCarNames.js
    │   └── validateTryCount.js
    └── 📂 views
        ├── Input.js
        └── Output.js
```
