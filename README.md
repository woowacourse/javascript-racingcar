# javascript-racingcar

# 기능 목록

1. 자동차 이름 입력

- [x] 자동차 이름 입력.
- [x] 쉼표(,)를 기준으로 구분
- [x] 1~5자가 아닌 것에 대한 예외처리
- [x] 이름 중복 예외처리
- [x] 빈 입력에 대한 예외처리
- [x] 자동차 수가 한명일 경우 예외처리

2. 시도 횟수 입력

- [x] 시도횟수 입력.
- [x] 시도횟수를 숫자로 변환
- [x] 20 이하가 아닌 것에 대한 예외처리
- [x] 자연수 입력이 아닌 것에 대한 예외처리

3. 전진하는 조건 설정

- [x] 랜덤 숫자 생성
- [x] 랜덤 숫자가 4 이상인지 판단
- [x] 4 이상 숫자에서 전진
- [x] 시도횟수 만큼 반복

4. 실행 결과 출력

- [x] 각 시도횟수별 실행 결과 출력

5. 우승자 선별

- [x] 우승자 선별
- [x] 다수의 우승자일 경우, 쉼표로 구분해서 출력. 단일 우승자의 경우, 이름만 출력

# 테스트

1. Car 객체 테스트

- [x] 객체 생성 테스트
- [x] 자동차 위치 history 저장 테스트

2. 검증 테스트

- [x] 자동차 이름 입력 검증 테스트
- [x] 시도 횟수 입력 검증 테스트

3. 우승자 선별 테스트

- [x] 우승자 선별 테스트

# UI / DOMAIN 분리 기능 목록

1. 자동차 이름 입력

- [x] 사용자에게서 자동차의 이름을 입력받는다. - ui
- [x] 자동차의 이름은 쉼표(,)를 기준으로 구분한다. - ui
- [x] 빈 입력일 경우 예외처리한다. - ui

2. 경주 횟수 입력

- [x] 사용자에게서 경주 횟수를 입력받는다. - ui
- [x] 경주 횟수는 숫자여야 한다. - ui
- [x] 경주 횟수는 정수여야 한다. - ui
- [x] 빈 입력일 경우 예외처리한다. - ui

3. 입력 에러 처리

- [ ] 사용자가 어떤 에러가 발생했는지 확인할 수 있도록 에러 메시지를 보여주고, 다시 입력할 수 있게 한다. - ui

4. 입력받은 이름으로 자동차를 만든다. - domain -> `Car`

- [x] 자동차의 이름은 5자 이하여야 한다. - domain
- [x] 자동차의 이름은 중복될 수 없다. - domain
- [x] 자동차의 이름은 빈 값일 수 없다. - domain
- [x] 자동차의 수는 2대 이상이여야 한다. - domain

4. 입력받은 이름과 시도 횟수로 경주 모델을 만든다. - domain -> `Race`

- [x] 시도 횟수는 1이상 20이하여야 한다. - domain

5. 자동차가 전진할지 멈출지 결정한다. - domain

- [ ] 랜덤 숫자를 생성한다. - domain
- [ ] 랜덤 숫자가 4 이상일 경우 전진한다. - domain

6. 시도 횟수만큼 자동차 경주 게임을 한다.

- [ ] 자동차 경주 게임 한 라운드를 진행한다. - domain -> `Race`
- [ ] 게임 한 라운드의 진행 상황을 출력해준다. - ui
- [ ] 시도 횟수만큼 경주를 반복한다. - domain

7. 자동차 경주 게임이 끝나면 우숭자를 알려준다.

- [ ] 우승자를 판단할 수 있다. (가장 멀리 간 자동차) - domain -> `WinnerSelector`
- [ ] 우승자는 한 명 이상일 수 있다. - domain
- [ ] 우승자를 출력한다. - ui
- [ ] 우승자가 여러 명일 경우, 쉼표(,)로 구분해서 출력해준다. - ui
