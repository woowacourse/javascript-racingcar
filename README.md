# javascript-racingcar

함수형 프로그래밍으로 만든 자동자 경주

## 폴더 구조

```
│── src/
│   ├── controller/
│   │   ├── gameController.js          # 게임 로직과 UI 연결하여 전체 흐름 관리
│   ├── domain/                        # 게임 핵심 로직
│   │   ├── moveCar.js                 # 자동차 이동 로직
│   │   ├── playRound.js               # 한 라운드 실행
│   │   ├── playGame.js                # 전체 게임 실행
│   │   ├── findWinners.js             # 우승자 찾기
│   ├── utils/                         # 유틸리티 함수
│   │   ├── generateRandomNumber.js    # 랜덤 숫자 생성
│   │   ├── pipe.js                    # 여러 함수를 조합하여 순차적으로 실행하는 유틸 함수
│   │   ├── retryUntilValid.js         # 올바르게 입력할 때까지 반복
│   │   ├── validateCarNames.js        # 자동차 입력 유효성 검사
│   │   ├── validateMoveCount.js       # 이동 횟수 입력 유효성 검사
│   │   ├── readLineAsync.js           # 입력 처리
│   ├── view/                          # 입출력 관련 모듈
│   │   ├── input.js                   # 사용자 입력 처리
│   │   ├── output.js                  # 결과 출력 처리
│   ├── constants/
│   ├── index.js                       # 시작점
```

## 📌 코드 실행 흐름

1. **사용자 입력 받기**
   - `getCarNames()` → 자동차 이름 입력
   - `getMoveCount()` → 이동 횟수 입력
   - 입력값이 유효하지 않으면 **반복 입력 요구**
2. **게임 실행**
   - `playGame(cars, rounds)` → 전체 게임 시작
   - 내부적으로 `playRound(cars)` 를 `rounds` 횟수만큼 실행하여 자동차 이동
3. **출력**
   - `printCars(cars)` → 매 라운드마다 자동차 상태 출력
   - `findWinners(cars)` → 우승자 찾기
   - `printWinners(winners)` → 우승자 출력

<br>

## 📌 기능명세서

### 1️⃣ **사용자 입력 처리**

- 사용자가 **자동차 이름**을 입력하면 **배열 형태로 변환하여 반환**한다.
  - `getCarNames(): string[]`
  - 유효성 검사 (조건: 자동차 이름은 **쉼표(,)** 로 구분되며, 최대 **5자 이하** 여야 한다.)
    - `validateCarNames(names: string[]): string[]`
- 사용자가 **이동 횟수**를 입력하면 **숫자로 변환하여 반환**한다.
  - `getMoveCount(): number`
  - 유효성 검사
    - `validateMoveCount(count: string): number`
- **유효성 검사를 통과하지 못하면** 에러 메시지를 출력하고 다시 입력받는다.
  - `retryUntilValid(promptMessage, inputFunc, validateFunc)`

### 2️⃣ **게임 진행**

- 입력된 **자동차 목록**과 **이동 횟수**를 기반으로 **경주를 진행**한다.
  - `playGame(cars: string[], rounds: number): Car[]`
- 매 라운드마다 **각 자동차가 이동할지 결정**한다.
- 최종적으로 **모든 라운드가 끝나면 우승자를 출력**한다.

### 3️⃣ 한 라운드 실행

- **모든 자동차**에 대해 이동 여부를 결정하여 상태를 업데이트한다. (**자동차의 위치를 변경한 새로운 배열**을 반환한다.)
  - `playRound(cars)`
  - 무작위 값(0~9)을 생성하여 4 이상이면 전진, 미만이면 정지한다.
    - `movaCar(car, generateRandomNumber())`
      - `generateRandomNumber`: 0~9 사이의 난수를 반환한다.

### 4️⃣ **우승자 선정**

- **최대 거리**를 기록한 자동차(들)를 찾아 **배열로 반환**한다.
  - `findWinners(cars: Car[]): string[]`

### 5️⃣ 출력 처리

- 자동차의 이동 현황을 `-`로 표현하여 출력한다.
  - `printRoundScore(cars: Car[]): void`
  ```tsx
  pobi : -
  woni :
  jun : -
  ```
- 최종 우승자를 쉼표(,)로 구분하여 출력한다.
  - `printWinners(winners: string[]): void`

<br>

## 커밋메시지

feat : 새로운 기능을 추가한 경우  
fix : 버그 수정  
docs : 문서를 수정한 경우  
style : 코드 스타일, 포멧, 주석을 변경  
refactor : 코드 리팩토링  
test : 테스트 관련 코드를 수정한 경우  
chore : 코드 수정이 아닌, 단순 폴더명 파일명 등을 수정한 경우
