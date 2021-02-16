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

- 자동차 이름을 입력 받는다.
  - [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
  - [x] 자동차 이름은 최소 1자 이상이어야 한다.
  - [x] 자동차 이름은 소문자, 대문자, 숫자로만 구성되어야 한다.
  - [x] 자동차 이름은 서로 중복될 수 없다.
  - [x] 자동차 이름 검증이 실패하면, alert 창이 나타난다
  - [x] 자동차 이름 검증을 성공하면, 시도 횟수 영역이 나타난다.
- 시도 횟수를 입력 받는다.
  - [x] 시도 횟수는 1이상이어야 한다.
  - [x] 시도 횟수 검증이 실패하면, alert 창이 나타난다.
  - [x] 시도 횟수 검증을 성공하면, 자동차 레이싱 영역이 나타난다.
- 자동차 레이싱이 진행된다.
  - [x] 자동차 객체를 생성한다.
  - [x] 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
  - [x] 0에서 9 사이의 random 값을 구한다.
  - [x] 자동차는 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
  - [x] 주어진 횟수 동안 자동차의 전진과 멈춤을 자동차 레이싱 영역에 나타낸다.
- 자동차 레이싱 우승자 화면이 나타난다.
  - [x] 우승자가 여러 명일 경우 ,를 이용하여 구분한다.
  - [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 게임이 다시 시작된다.
  - [x] 다시 시작 버튼을 누르면 게임이 다시 시작된다.

<br>
### 🎯🎯 step2

- [ ] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
- [ ] setInterval, setTimeout, requestAnimationFrame 을 활용하여 애니메이션을 구현한다.
- [ ] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

- 상수들 refactor

<br>
## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-racingcar/blob/main/LICENSE) licensed.
