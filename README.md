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

<br>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

<br>

## 🐣 Calculator의 실수를 반복하지 말자!

- 기능 단위로 개발한다.
- TDD를 효율적으로 사용한다.
- if문을 덕지덕지 붙이지 않는다.
- Pair Programming 우리만의 규칙을 정해 역할을 분담한다.

## 👊 이번 미션의 동작 Flow (Step1)

1. 자동차 이름을 `,`로 구분하여 입력받는다.
2. 확인을 누른다.
3. 시도할 횟수를 입력하는 창을 보여준다.
4. 시도할 횟수를 입력받는다.
5. 확인을 누른다.
6. 결과를 보여준다.
   - 자동차 경주 게임의 턴이 진행될 때마다 1초의 텀을 두고 진행한다.
   - 정상적으로 게임의 턴이 모두 동작된 이후에는 결과를 보여주고, 2초 후에 축하의 alert 메시지를 띄운다.
   - 결과에는 자동차 이름, 각 자동차가 얼마나 전진했는지, 최종 우승자, 다시 시작하기 버튼을 포함한다.

## 👊 이번 미션의 동작 Flow (Step2)

1. 자동차 경주가 진행된다.
2. 한 턴이 진행되면 1초 쉰다. (경주가 끝날 때 까지)
3. 경주가 끝나면, 결과를 보여준다.
4. 축하 메시지를 띄운다. (alert)

## 🌼 필요한 기능들

- `Car` 생성자 함수

  - 여러 인스턴스를 생성할 계획이므로 생성자 함수 `Car`의 prototype 객체에 공통되는 프로퍼티와 메소드를 정의한다.
  - 프로퍼티

    - `Car` 이름
    - 최종 전진 횟수

  - 메소드
    - 전진 메소드
      - `0-9` 사이의 숫자 random 생성
      - 4 이상 : 전진
      - 3 이하 : 멈춤

- 전진하는 횟수 만큼 화살표 그림을 그려주는 함수

- 최종 우승자를 가리는 함수

  - 여러명일 수 있음
  - 쉼표로 구분

- 게임을 다시 시작하는 함수

## 🐞 예외사항

- 자동차 이름
  - 자동차 이름이 하나라도 5자 초과일 때 -> alert -> input reset
  - 각 자동차 이름 앞뒤에 공백이 있을 경우, 공백을 잘라준다.
  - 입력이 없을 때
  - 중복되는 자동차 이름 있을 때
  - 시도 횟수 입력 후 확인 버튼 여러번 눌릴 때 결과 계속 이어붙지 않게 수정한다.
    - 시도 횟수 입력 후 한 번 확인 버튼이 눌리면 다시 버튼이 안눌리게 한다.
  - 자동차 이름 입력 후 한 번 확인 버튼이 눌리면 다시 버튼이 안눌리게 한다.

## ✅ 테스트 코드

- 자동차 이름
  - 올바르지 않은 자동차 이름이 입력됐을 경우
  - 자동차 이름 앞뒤에 공백이 있을 경우
  - 입력이 없을 때

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-racingcar/issues) 에 등록 후 @eastjun에게 dm을 보내주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-racingcar/blob/main/LICENSE) licensed.
