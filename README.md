# javascript-racingcar
함수형 프로그래밍으로 만든 자동자 경주

## 폴더 구조 
```
│── src/
│   ├── domain/                     # 게임 핵심 로직
│   │   ├── moveCar.js             # 자동차 이동 로직
│   │   ├── playRound.js           # 한 라운드 실행
│   │   ├── playGame.js            # 전체 게임 실행
│   │   ├── findWinners.js         # 우승자 찾기
│   ├── utils/                    # 유틸리티 함수
│   │   ├── random.js              # 랜덤 숫자 생성          
│   ├── view/                      # 입출력 관련 모듈
│   │   ├── validation.js          # 입력 유효성 검사   
│   │   ├── input.js               # 사용자 입력 처리
│   │   ├── output.js              # 결과 출력 처리
│   ├── constants/ 
│   ├── index.js                   # 시작점            
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
