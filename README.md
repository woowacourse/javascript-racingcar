# 🏎️ javascript-racingcar 간단 설명

사용자에게 자동차의 이름들과 경기 횟수를 입력받아 매 횟수마다 각 자동차의 이름과 현재 위치를 출력하고 레이스가 종료된 후 우승자들을 출력한다.

# 📜 기능 요구사항

- [x] 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- [x] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [x] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- [x] 사용자가 잘못된 입력 값을 작성한 경우 에러 메시지를 보여주고, 다시 입력할 수 있게 한다.

# 💻 기능 / 작업 목록

**DOMAIN 로직** = 🛠️<br/>
**UI** 로직 = ⌨️

- [ ] 사용자에게 자동차들의 이름을 입력 받는다. ⌨️
- [ ] 사용자에게 자동차 경수 횟수를 입력 받는다. ⌨️
- [ ] 에러가 발생할 경우 사용자에게 에러 메시지를 출력하고 재입력을 유도한다. ⌨️
- [ ] 자동차의 객체를 생성한다. 🛠️
  - [ ] 자동차는 이름을 부여할 수 있다. 🛠️
    - [ ] 자동차의 이름은 1자 이상 5자 이하만 가능하다. 🛠️
    - [ ] 자동차의 이름이 0자 이하 6자 이상인 경우 에러 메시지를 출력한다. 🛠️
    - [ ] 자동차의 이름들이 쉼표(,)를 기준으로 구분되어 있는지 확인한다. 🛠️
    - [ ] 쉼표(,)로 나누어진 이름이 2개 미만인 경우 에러 메시지를 출력한다. 🛠️
    - [ ] 쉼표(,)로 나누어진 이름이 60개 초과인 경우 에러 메시지를 출력한다. 🛠️
  - [ ] 자동차의 초기 위치는 0이다. 🛠️
    - [ ] 자동차가 전진하는 경우 초기 위치에 1을 더해준다. 🛠️
    - [ ] 자동차가 전진하는 조건은 무작위 값이 4이상일 경우이다. 🛠️
    - [ ] 자동차가 멈춰있는 조건은 무작위 값이 3이하일 경우이다. 🛠️
- [ ] 0에서 9 사이에서 무작위 값을 구할 수 있다. 🛠️
- [ ] 매 경주 횟수마다 자동차의 이름과 자동차의 위치를 출력한다. ⌨️
- [ ] 우승자의 객체를 생성한다. 🛠️
  - [ ] 경기가 종료되고 제일 멀리 위치해 있는 자동차가 우승자이다. 🛠️
  - [ ] 우승자는 여러명일 수 있다. 🛠️
  - [ ] 우승자가 여러명인 경우 쉼표(,)를 이용하여 출력한다. ⌨️

# ⛔️ 예외처리 사항

### 🏎️ 자동차

- [x] 자동차의 이름이 0자인 경우
- [x] 자동차의 이름이 6이상인 경우
- [x] 자동차의 이름이 쉼표(,)를 기준으로 구분되지 않은 경우
- [x] 생성된 자동차의 개수가 2개 미만인 경우
- [ ] 생성된 자동차의 개수가 60개 초과한 경우 [🇫🇷 르망 24시(Le Mans 24 Hours) 기준]

### 🏁 경기 라운드

- [x] 경기 라운드가 숫자가 아닌 경우
- [x] 경기 라운드가 0인 경우
- [x] 경기 라운드가 음수인 경우
- [ ] 경기 라운드가 bigInt인 경우
