# javascript-racingcar

## 📍프로그램 개요

---

자동차 이름과 반복 횟수를 입력받아 경주를 진행하여 우승자를 출력하는 프로그램

## 📁 파일구조

```bash
📂 src
├── 📂 domain
│ ├── 📄 Car.js
│
├── 📂 service
│ ├── 📄 parsingService.js
│ ├── 📄 raceService.js
│ ├── 📄 statisticsService.js
│
├── 📂 constants
│ ├── 📄 ErrorMessage.js
│ ├── 📄 SystemMessage.js
│
├── 📂 util
│ ├── 📄 RandomNumberGenerator.js
│
├── 📂 validation
│ ├── 📄 Validation.js
│
├── 📂 view
│ ├── 📄 InputView.js
│ ├── 📄 OutputView.js
│ ├── 📄 ReadLineAsync.js
│
├── 📄 index.js
```

## 🛠️ 기능구현

---

- [x] 자동차 이름을 입력 받는다
  - [x] 쉼표를 기준으로 이름을 분리한다
- [x] 입력한 자동차 이름에 대해 유효성 검사를 실시한다
- [x] 입력받은 이름으로 자동차를 만든다
- [x] 반복할 횟수를 입력 받는다
- [x] 입력한 횟수에 대해 유효성 검사를 실시한다
- [x] 입력한 횟수만큼 자동차 경주 게임을 진행한다
  - [x] 매 회차마다 랜덤으로 숫자를 발행한다
  - [x] 랜덤 숫자가 4이상일 경우 전진한다
  - [x] 매 회차마다 자동차 이름 및 전진횟수를 '-' 로 출력한다
- [x] 자동차 경주 게임이 끝나면 우승자를 알려준다
  - [x] 우승자를 판별한다
  - [x] 우승자를 출력한다
    - [x] 1명 이상인 경우 쉼표로 구분하여 출력한다
- [x] 잘못된 값을 입력했을 경우 에러메세지를 출력하고 다시 입력을 받는다.

## ⚠️ 에러 처리

### 자동차 이름 입력

- [x] 자동차 이름이 공백인 경우 에러를 출력한다
- [x] 자동차 이름이 5자 초과인 경우 에러를 출력한다
- [x] 자동차 이름에 중복되는 닉네임이 있는 경우 에러를 출력한다

### 이동 횟수 입력

- [x] 이동 횟수가 숫자가 아닌 경우 에러를 출력한다
- [x] 음수인 경우 에러를 출력한다.

## 📥 설치 및 실행 방법

---

1. 프로젝트 클론

```bash
git clone https://github.com/hanheel/javascript-racingcar.git
```

1. 의존성 설치 : 필요한 라이브러리 설치

```bash
npm install
```

1. 프로그램 실행

```bash
npm run start
```

## 📄 사용 예제

---

1. 자동차 이름 입력

```bash
경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).
ha,aa
```

1. 반복할 횟수 입력

```bash
시도할 횟수는 몇 회인가요?
3
```

1. 매 단계 경주 결과 출력

```bash
ha :-
aa :

ha :--
aa :

ha :---
aa :-
```

1. 최종 우승자 출력

```bash
최종우승자 : ha
```
