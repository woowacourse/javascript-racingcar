# 기능 목록
## 도메인 로직
### 자동차 이름 유효성 검사
[x] 통과 조건
- 영어,한글만 가능(띄어쓰기 불가)
- 글자 수: 1~5자
- 쉼표로 이름들 구분 (쉼표가 존재, 쉼표 개수 = 경주 참여 이름 개수 -1)
- 이름 중복 불가

### 진행 횟수 유효성 검사
[x] 통과 조건
- 정규식 표현 사용(정수만 인식)
- 진행 횟수: 1~5회

### 랜덤 숫자 생성
[x] 0에서 9 사이의 정수에서 무작위 값을 구하기

### 자동차
[x] 필드 속성: 이름, 전진 횟수
[x] 생성자 파라미터: 이름 

// carList.forEach((car)=> car.movement)
//round 마다
// carList.forEach((car)=> new Car(car.name, car.step,getRandomNumber()).movement())
#### 전진 판단
[x] 랜덤 숫자(정수)가 4이상 일 경우 전진(전진 횟수 +1)

## Input, OutPut
[x] Input
- 사용자의 입력값 받아오기

[x] Output
- 메세지 출력하기


---
모델
Car : 이름 , 전진횟수, 전진 판단
4이상 부터 전진
Game: 게임 진행 (속성: 경주 참여 자동차들, 게임 진행 횟수)
Name : 이름 유효성 검사
영어,한글 (띄어쓰기x)
1~5자 이하
쉼표로 구분
Round : 진행 횟수 유효성 검사
1~5
RandomNumber: 0~9 중에 하나
뷰
InputView
OutputView
컨트롤러
InputController
GameController


//TODO - 2/15 할일
[] Game 테스트 코드
[] 라운드 마다 게임 결과 출력
[] 전체 게임 진행
[] 우승자 출력 