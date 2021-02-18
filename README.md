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
  - 최대 이동 가능한 횟수는 20회이다
- [x] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러명일 경우 ,를 이용하여 구분한다.

### 🎯🎯 step2

- [x] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
  - [x] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- [x] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
- [x] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

<br>

## ⛰️ 환경 설정

1. yarn을 이용하여 package 초기화: `yarn init`
2. cypress 설치: `yarn add cypress --dev`
3. eslint 설치: `yarn add eslint --dev`
4. prettier 설치: `yarn add prettier --dev --exact`
   - .prettier.json 설정: `echo {}> .prettierrc.json` // 별도로 옵션을 설정하지 않고 기본 설정 그대로 사용한다
   - .prettierignore 설정: cypress/integration 외 cypress내 디렉토리는 모두 무시하도록 설정
5. eslint-config-prettier 설치: `yarn add eslint-config-prettier --dev`
6. eslint-config-cypress 설치: `yarn add eslint-config-cypress --dev`
7. eslint 설정: `yarn eslint --init`
   - prettier, cypress plugins 및 extends 추가
   - eslint:recommended 컨벤션 적용
8. .vscode/settings.json 설정
   - 모든 파일에 대하여 저장시 eslint 및 prettier 적용
   - editor 탭사이즈는 2, 탭 대신 스페이스 사용
   - 패키지매니져로 yarn을 사용함을 명시
   - 항상 마지막 줄에 빈 라인을 추가

## 🌋 구조 설계

1. Model: CarModel
   - 필드 : name, moveCount
   - 메서드 : move
2. View: ViewController, CarView
   1. `lap-input-container`을 렌더한다.
   2. `car-player`을 렌더한다.
   3. `forward-icon`을 렌더한다.
   4. `game-result-container`을 렌더한다.
3. Controller
   1. 이름 입력 받기
   2. 횟수 입력 받기
   3. 횟수만큼 반복하는 기능
   4. 갈지 안갈지 결정하는 기능
   5. 다시 시작하면 초기화하는 기능

## 🏝️ 기능 구현

### 🏰 자동차 이름 입력하기

1. Given(주어진 환경)
   - 유저에게 자동차 경주 화면이 렌더링 된다.
2. When(행위)
   - 유저가 자동차 이름 입력 란에 자동차 이름을 입력한다.
   - 자동차 이름은 5자 이하이다.
   - 자동차 이름은 두 개 이상이다.
   - 자동차 이름은 빈 값이 아니다.
   - 자동차 이름은 쉼표(,)를 기준으로 구분된다.
3. Then(기대 결과)
   - 시도할 횟수를 입력 받는 화면이 렌더링 된다.
   - 입력된 각 자동차 이름(.car-player)이 렌더링 된다.

### 🏰🏰 시도할 횟수 입력하기

1. Given(주어진 환경)
   - 유저에게 자동차 경주 화면이 렌더링된 후,
   - 유저가 자동차 이름 입력 란에 자동차 이름("EAST, WEST, SOUTH, NORTH")을 입력한다.
   - 자동차 이름이 쉼표(,)를 기준으로 구분되어, .car-player(EAST, WEST, SOUTH, NORTH)가 렌더링되어 있다.
2. When(행위)
   - 유저가 시도할 횟수 란에 시도할 횟수값을 입력후 확인 버튼을 클릭한다.
   - 시도할 횟수는 1보다 크고 20보다 작은 정수이다.
3. Then(기대 결과)
   - 게임 진행상황이 렌더링된다.
     - 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
   - 주어진 횟수 동안 4대의 자동차가 전진한만큼 화살표가 표시된다.
   - 게임 결과가 렌더링된다.
     - 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
   - 우승자가 여러명일 경우 ,를 이용하여 구분한다.

### 🏰🏰🏰 다시 시작 버튼 클릭하기

1. Given(주어진 환경)
   - 유저에게 자동차 경주 화면이 렌더링된 후,
   - 유저가 자동차 이름 입력 란에 자동차 이름("EAST, WEST, SOUTH, NORTH")을 입력한다.
   - 자동차 이름이 쉼표(,)를 기준으로 구분되어, .car-player(EAST, WEST, SOUTH, NORTH)가 렌더링되어 있다.
   - 유저가 시도할 횟수 입력 란에 12를 입력한다.
   - 게임 진행 상황과 게임 결과가 렌더링되어 있다.
2. When(행위)
   - 유저가 다시 시작 버튼을 클릭한다.
3. Then(기대 결과)
   - 유저에게 자동차 경주 게임 타이틀과 자동차 이름 입력란만 보인다.

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-racingcar/blob/main/LICENSE) licensed.
