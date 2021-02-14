<p align="middle" >
  <img width="200px;" src="https://user-images.githubusercontent.com/50367798/106415730-2645a280-6493-11eb-876c-ef7172652261.png"/>
</p>
<h2 align="middle">level1 - 자동차 경주 게임</h2>
<p align="middle">자바스크립트로 구현 하는 자동차 경주 게임</p>
<p align="middle">
<img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
<img src="https://img.shields.io/badge/language-html-blue.svg?style=flat-square"/>
<a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank">
  <img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

## 🔥 Projects!

<p align="middle">
  <img width="400" src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/7c76e809d82a4a3aa0fd78a86be25427">
</p>

### 🎯 step1

- [x] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- [x] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [x] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러명일 경우 ,를 이용하여 구분한다.

### 🎯🎯 step2

- [x] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
  - [x] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- [x] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
- [x] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

## 구현기능

### step1

- 콤마로 구분된 자동차 이름을 입력받는다.
  - 아무 값도 입력하지 않고 확인을 누르는 경우 -> `alert`
  - 이름을 하나만 입력하는 경우 -> `alert`
  - 입력된 이름 중 `''`(빈 문자)가 있는 경우 -> `alert`
    - 이름의 처음과 끝의 공백문자는 `trim`하여 처리함
  - 같은 이름이 2개 이상인 경우 -> `alert`
  - 각 이름 중 5자를 넘어가는 이름이 존재하는 경우 -> `alert`
- 이름 입력 후 입력창을 비활성화한다.
- 시도할 횟수를 입력받는다.
  - 아무 값도 입력하지 않고 확인을 누르는 경우 -> `alert`
  - 입력된 횟수가 0이하인 경우 -> `<input type="number" min="1">`으로 입력되지 않게 처리
  - 개발자 도구 조작 등의 이유로 자연수가 아닌 값이 입력된 경우 -> `alert`
- 횟수 입력 후 입력창을 비활성화한다.
- 0~9 사이의 랜덤값을 구한다.
- random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- 게임 결과에 따른 각 자동차의 이동 현황을 화면에 띄운다.
- 게임 우승자를 화면에 띄운다.
  - 우승자가 여러명일 경우 콤마를 이용하여 구분
- 다시시작 버튼 입력 시 게임을 reset한다.

### step2

- 게임 결과가 모두 나타나고 2초 후 `alert`으로 축하 메세지를 띄운다.
- 1초의 텀을 두고 각 턴의 결과가 화면에 출력된다.

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-racingcar/blob/main/LICENSE) licensed.
