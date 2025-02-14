# javascript-racingcar

## 📍프로그램 개요

---

자동차 이름과 반복 횟수를 입력받아 경주를 진행하여 우승자를 출력하는 프로그램

## 📁 파일구조

📂 src
├── 📂 domain
│ ├── 📄 Car.js
│ ├── 📄 RandomNumberGenerator.js
│
├── 📂 service
│ ├── 📄 parsingService.js
│ ├── 📄 raceService.js
│ ├── 📄 statisticsService.js
│
├── 📂 settings
│ ├── 📄 ErrorMessage.js
│ ├── 📄 SystemMessage.js
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

## 🛠️ 기능구현

---

- [x] 자동차 이름 입력 : 쉼표 기준으로 이름을 분리
- [x] 자동차 이름 유효성 검사
  - [x] split 통해 parsing
- [x] 반복할 횟수 입력
- [x] 반복할 횟수 유효성 검사
  - [x] Number(), isNaN
- [x] 매 횟수마다 랜덤 숫자 발행
  - [x] math.floor, Math.random()을 통해 랜덤값을 불러옴
  - [x] 랜덤 숫자가 4이상일 경우 전진
  - [x] 반복문으로 move()를 통해 차를 전진
- [x] 전진한 총 position을 불러온다
- [x] 자동차 이름과 전진한 횟수를 -로 출력한다
  - [x] repeat()를 사용한다.
- [x] 우승자를 판별한다
  - [x] max, map으로 우승자를 정한다.
- [x] 우승자를 출력한다
  - [x] 1명 이상인 경우 쉼표로 구분하여 출력한다
    - [x] join(', ')으로 출력한다.
- [x] 잘못된 값을 입력했을 경우 에러메세지를 출력하고 다시 입력을 받는다.
  - [x] 리트라이 로직을 작성한다(while)

## ⚠️ 에러 처리

### 자동차 이름 입력

- [x] 자동차 이름이 공백인 경우 에러를 출력한다
- [x] 자동차 이름이 5자 초과인 경우 에러를 출력한다
- [x] 자동차 이름에 중복되는 닉네임이 있는 경우 에러를 출력한다

### 이동 횟수 입력

- [x] 이동 횟수가 숫자가 아닌 경우 에러를 출력한다
- [x] 음수인 경우 에러를 출력한다.

## 리뷰 후, 2단계에서 고친것

🛠 책임과 역할 분리
✅ Car 객체에서 print 기능을 제거하고 CarService로 이동
✅ 출력(print)은 OutputView에서 전담
✅ raceInit에 Service를 주입하여 UI와의 의존성을 제거

🔄 구조 및 코드 개선
✅ raceManager는 상태를 관리하지 않으므로 객체가 아닌 함수로 변경
✅ raceManager.startRace는 Cars 배열을 조작 후 새로운 cars 배열을 반환하도록 수정, 사이드 이펙트 방지.
✅ winners를 추출하는 도메인 로직과 이를 문자열로 변환하는 UI 로직을 분리

🔤 네이밍 및 코드 스타일 개선
✅ 상수 이름을 일반적인 컨벤션에 맞게 수정 (ERROR_MESSAGE 등)
✅ 뇌가 불타는 도중 까마득하게 잊고 있었던 매직넘버 상수화
✅ 뇌가 고장나기 직전 썼던 isNegative의 변수명을 로직에 맞게 isPositive로 정정
✅ 비직관적인 변수명을 명확한 의미를 가지도록 수정

🔧 유틸리티 및 예외 처리
✅ withTryCatch라는 고차 함수를 생성하여 예외 처리를 보다 범용적으로 활용할 수 있도록 util 폴더에 추가

🧪 테스트 및 안정성 강화
✅ 도메인 로직에 테스트케이스 보강.

## 📥 설치 및 실행 방법

---

**이 프로젝트는 Node.js 20.17.0에서 실행됩니다.**

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
블루,마빈
```

1. 반복할 횟수 입력

```bash
시도할 횟수는 몇 회인가요?
3
```

1. 매 단계 경주 결과 출력

```bash
블루 :-
마빈 :

블루 :--
마빈 :

블루 :---
마빈 :-
```

1. 최종 우승자 출력

```bash
최종우승자 : 마빈
```
