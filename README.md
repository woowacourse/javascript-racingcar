# javascript-racingcar

함수형 프로그래밍으로 만든 자동자 경주

## 폴더 구조

```
│── src/
│   ├── constants/                      # 상수
│   │   ├── message.js                  # 메시지
│   ├── domain/                         # 게임 핵심 로직
│   │   ├── moveCar.js                  # 자동차 이동 로직
│   │   ├── playRound.js                # 한 라운드 실행
│   │   ├── playGame.js                 # 전체 게임 실행
│   │   ├── findWinners.js              # 우승자 찾기
│   ├── utils/                          # 유틸리티 함수
│   │   ├── generateRandomNumber.js     # 랜덤 숫자 생성
│   │   ├── readLineAsync.js            # readline
│   │   ├── retryUntilValid.js          # 유효한 값에 대한 반복 요청
│   │   ├── validateCarNames.js         # 차 이름에 대한 유효성 검사
│   │   ├── validateMoveCount.js        # 시행 횟수에 대한 유효성 검사
│   ├── view/                           # 입출력 관련 모듈
│   │   ├── input.js                    # 사용자 입력 처리
│   │   ├── output.js                   # 결과 출력 처리
│   ├── index.js                        # 시작점
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

## 커밋메시지

feat : 새로운 기능을 추가한 경우
fix : 버그 수정
docs : 문서를 수정한 경우
style : 코드 스타일, 포멧, 주석을 변경
refactor : 코드 리팩토링
test : 테스트 관련 코드를 수정한 경우
chore : 코드 수정이 아닌, 단순 폴더명 파일명 등을 수정한 경우

## 기능/작업 목록 (ui/domain)

- 사용자에게서 자동차의 이름을 입력받는다. (ui)
- 사용자에게서 경주 횟수를 입력받는다. (ui)
- 입력받은 이름으로 자동차를 만든다. (domain)
  - 경주할 차는 최소 2대 이상이어야 한다. (domain)
  - 자동차 이름은 쉼표(,)를 기준으로 구분한다. (domain)
  - 이름은 5자 이하만 가능하다. (domain)
  - 공백은 이름으로 사용할 수 없다. (domain)
  - 중복되는 자동차 이름은 사용할 수 없다. (domain)
- 입력받은 횟수만큼 자동차 경주 게임을 한다. (domain)
  - 1 이상인 정수만 입력할 수 있다. (domain)
- 자동차 경주 게임 한 라운드를 진행한다. (domain)
- 게임 한 라운드의 진행 상황을 출력해준다. (ui)
- 자동차 경주 게임이 끝나면 우승자를 알려준다. (ui)
  - 우승자를 판단할 수 있다. (가장 멀리 간 자동차) (domain)
  - 우승자는 한 명 이상일 수 있다. (domain)
  - 우승자가 여러 명일 경우 쉼표(,)로 구분해서 출력해준다. (ui)

자동차 이름은 쉼표(,)를 기준으로 구분하며 / 이름은 5자 이하만 가능하다.

- 사용자가 입력한 문자열을 쉼표(,)를 기준으로 구분한다. (ui)
- 이름이 5자 초과인 경우 에러가 발생해야 한다. (domain)
- 사용자가 어떤 에러가 발생했는지 확인할 수 있도록 에러 메시지를 보여주고, 다시 입력할 수 있게 한다. (ui)
