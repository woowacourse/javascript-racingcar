# javascript-racingcar

# 기능 요구 사항

## **test**

### Car.js 에 대한 케이스

- 객체가 생성이 되는가?
- 4이상일 때 전진을 하는가?

### Random.js 에 대한 케이스

- min~max 사이의 자연수 난수를 생성하는가?

### Game.js에 대한 케이스

- 우승자가 여러명일 경우 모두 출력하는가?
- 우승자 판단을 잘 하는가?
- #carList = [car1{name, position}, car2]; 이 필드를 참고해 우승자를 가려 우승자의 name을 문자열 배열로 반환해주는 메서드

## Utils

- Random.js 는 (min, max) 0~9 사이의 자연수 난수를 생성
- Validator.js 는 검증 로직을 모은 객체
  (검증 예외 케이스:
- 사람 수 입력 제한(40)
- 사람 이름 길이 제한(5글자) -> 써로게이트 페어의 length 값 고려)
- 쉼표(,)로 이름을 구분하지 않았을 경우: Error 처리
- " pobi " -> "pobi" trim() 적용(문자사이 공백은 허용.
- 소수일때
- 숫자가 아닐때
- 이름 중복일때)
- 시도 횟수 제한(100번)
- 사람 이름 중복 시 처리
- 빈값일때

## Models

- Car.js는 name, position 속성을 가진 생성자
- Car.js 가 Random.js의 함수를 호출해 0~9 값을 받아 4이상일 때, position++하는 기능

## Controllers

- InputView.js 사용자 입력 호출
- Game.js는 입력받은 값으로 Car 객체를 생성
- #carList 필드를 만들어, cars 상태 관리
- 사용자 입력값인 tryNumber만큼 carList를 순회하며 레이스 반복
- 레이스 결과에 따라 우승자 이름 추출
- 전진 횟수를 OutputView에 전달
- 결과값 OutputView.js 출력 호출
- #carList를 인자로 받는 우승자 판단해서 const winnerList = []에 push
- winnerList 를 최종적으로 return 함수

## Views

- InputView.js 는 사용자입력(name, tryNumber)
- OutputView.js 는 결과값 출력
- OutputView.js 는 전진 횟수만큼 '-' 출력
