# javascript-racingcar

### 🐥 니야와 호이초이의 페어 프로그래밍

## 🎯 기능 요구 사항

- [x] 자동차에 이름을 부여할 수 있다.
- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [x] 사용자가 잘못된 입력 값을 작성한 경우 에러 메시지를 보여주고, 다시 입력할 수 있게 한다.
- [x] 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- [x] 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

## 예외 사항

자동차 입력에 대한 유효성 검사

- [x] 자동차 이름 1자 이상 ~ 5자 이하
- [x] 자동차 이름 전체가 공백인 경우
- [x] 자동차 이름이 중복되는 경우

시도횟수 입력에 대한 유효성 검사

- [x] 자연수(양의 정수)가 아닌 경우
- [x] 0이하인 경우

## 입력

- [x] 자동차 이름들 입력
- [x] 시도 횟수 입력

## 출력

- [x] 자동차 경주 내역 출력
- [x] 최종 우승자 출력

## 리팩토링

- [x] 입출력 따로 관리 (Console 객체)
- [ ] 함수 길이 15 제한
- [ ] indent depth 2 제한
- [ ] 상수 처리
- [ ]

## 단위 테스트

- [ ]

### 폐어 규칙

**공통**

- 페어 전환 시간) 15분 -> 15분 -> 5분 회고
- 커밋 단위) 기능 단위로 커밋할 것

**드라이버**

- 설명하면서 진행할 것.
- 내비게이터를 방치하지 말 것.

**내비게이터**

- 쪼지 말 것.

### 25.02.12 회고

**니야**

- Keep
  - 소통을 잘해서 페어의 코드 구현 방식이나 평소 스타일을 알 수 있어서 좋았다.
  - 덕분에 내가 처음 보는 방식도 배울 수 있었다.
  - 미리 페어와의 코드 동기화 작업을 끝내놔서 좋았다.
- Problem
  - 페어 전환시간을 15분으로 하긴 했지만, 솔직히 너무 짧았다. 집중하다보니 계속 시간이 너무 흘러버렸다.
  - prettier를 미리 설정하지 못해서 살짝 귀찮아졌다. 저장하면 자동으로 반영되게 하는걸 못해놔서 계속 cli로 하는게 좀 불편했다.
  - live share 하면 상대방 터미널이 자꾸 멈추기도 하고, 동시 작업할 때 동기화가 바로안되고 그래서 충돌나는 문제가 있다.
- Try
  - 내일은 시간을 좀 잘 지켜서 전환해야겠다.
  - 좀 더 빨리 기능구현부터 마치고 유효성 검증을 마저 해야겠다.
  - 시간 되면 테스트 코드도 해볼 것!

**호이초이**

- Keep:

  - 초기에 폴더구조부터 짜고 설계하는 방식이 좋았다.
  - 많은 대화를 나누면서 진행해서 좋았다.

- Problem:

  - 속도가 느린 것 같다. (내가 잘 못따라가는 느낌)

- Try:
  - 페어 전환 시간을 잘 지키자.
  - 수용적으로 잘 받아들이자!
  - 문제 파악 좀 해오자.
  - 커밋 잘 하기
  - 테스트 코드도 짜자.
