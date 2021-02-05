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

- [ ] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- [ ] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [ ] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [ ] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [ ] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [ ] 우승자가 여러명일 경우 ,를 이용하여 구분한다.

### 🎯🎯 step2

- [ ] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
  - [ ] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- [ ] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

<br>

## 📝 구현 기능 목록

- 자동차 이름 입력
  - [ ] 확인버튼을 누르면 사용자가 입력한 자동차 이름들을 쉼표(,)를 기준으로 구분하여 화면에 출력한다.
    > - [ ] 'EAST, WEST, SOUTH, NORTH'를 입력하면 화면에 해당 자동차 이름들을 표시하는 테스트를 한다.
  - [ ] 올바르지 않은 자동차 이름을 입력한 경우 경고메세지를 출력한다.
    > - [ ] 'YUJOYOONHO'을 입력한 경우 '이름은 5글자 이하로 입력해 주세요.' 경고메세지를 출력하는 테스트를 한다.
    > - [ ] 공백만 입력된 경우나 아무것도 입력되지 않은 경우 '공백만으로는 이름을 구성할 수 없습니다.' 경고메세지를 출력하는 테스트를 한다.
- 시도 횟수 입력
  - [ ] 양의 정수만을 시도횟수로 입력할 수 있다.
    > - [ ] '-7'을 입력한 경우 '1 이상의 숫자를 입력해주세요.' 경고메세지를 출력하는 테스트를 한다.
  - [ ] 확인버튼을 누르면 자동차 경주를 진행하고 결과를 출력한다.
    > - [ ] 자동차 이름에 'YUJO, HARU'를 입력하고 시도 횟수에 '5'를 입력하면
- 자동자 경주 진행

  - [ ] 자동차 이름과 시도 횟수가 정상적으로 입력된 경우, 자동차 경주를 진행한다.
  - [ ] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
  - [ ] 전진하는 차의 경우 화살표를 추가로 표시해준다.

- 결과 출력
  - [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
  - [ ] 우승자가 여러명일 경우 ,를 이용하여 구분해서 출력한다.
