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

### :point_right: commit principle

- :art: `:art:` when styling the code
- :hammer_and_wrench: `:hammer_and_wrench:` when refactoring the code
- :racehorse: `:racehorse:` when adding the function or something
- :memo: `:memo:` when writing docs
- :bug: `:bug:` when fixing a bug
- :fire: `:fire:` when removing code or files
- :white_check_mark: `:white_check_mark:` when adding tests
- :ballot_box_with_check: `:ballot_box_with_check:` when resolving tests
- :shirt: `:shirt:` when removing linter warnings
- :beginner: `:beginner:` when inital commit

### :technologist: feat list

![자동차경주게임](./src/image/carGameImage.png)

#### major feature

- [x] 이름 입력 칸과 확인 버튼만 있다.
- [x] 이름 입력 칸에 placeholder('자동차 이름')가 있다.
- [x] 이름 입력 칸에 ','로 구분해서 이름을 입력할 수 있다. (TDD)
- [x] 이름 입력 칸에 이름을 입력하고 확인 버튼을 누르면 칸이 비워지고, 횟수 입력 칸이 나온다.
- [x] 이름 입력 칸은 알파벳, 한글, ‘,’만 입력 가능하다.
- [x] 횟수 입력 칸에 placeholder('시도 횟수')가 있다.
- [x] 횟수 입력 칸에 횟수를 입력하고 확인 버튼을 누르면 칸이 비워진다.
- [x] 횟수 입력 칸에 횟수를 입력하고 확인 버튼을 누르면 진행창/결과창/리셋 버튼이 나온다.
- [x] 이름 확인 버튼을 연달아 눌러도 횟수 입력 칸과 버튼은 한 번만 나온다.
- [x] 횟수 확인 버튼을 연달아 눌러도 진행창/결과창/리셋 버튼은 한 번만 나온다.
- [x] 입력한 이름이 ‘,’를 기준으로 진행창에 출력된다.
- [x] 랜덤 숫자는 0에서 9 사이의 정수여야 한다. (TDD)
- [x] 각 자동차는 입력한 횟수만큼 반복하여 랜덤 숫자를 배정받고, 랜덤 숫자가 4-9일 때 전진 횟수가 1 증가한다. (TDD)
- [x] 가장 많이 전진한 자동차가 우승인지 판별한다.
- [x] 우승자를 리턴한다. (TDD)
- [x] 각 자동차의 최대 전진 횟수가 입력한 횟수보다 적거나 같다.
- [x] 우승자가 2명 이상일 경우 ‘,’로 구분하여 출력한다. (TDD)
- [x] 우승자의 수는 입력한 이름의 수보다 적거나 같다.
- [x] 리셋 버튼을 누르면 초기 상태로 돌아간다.
- [x] 이름 입력 칸에 어떤 문자열을 붙여넣어도 알파벳, 한글, ','만 붙여넣어진다.

#### exceptions

- [x] 빈 문자인 이름을 등록하면 alert 메시지를 표시한다.
- [x] 5자 초과인 이름을 등록하면 alert 메시지를 표시한다.
- [x] 이름을 등록한 뒤에 다시 이름을 등록하려 할 경우 alert 메시지를 표시한다.
- [x] 횟수를 설정한 뒤에 다시 횟수를 설정하려 할 경우 alert 메시지를 표시한다.
- [x] 횟수를 설정하려 할 때 횟수가 자연수가 아닐 경우 alert 메시지를 표시한다.
- [x] 중복된 이름을 포함할 경우 alert 메시지를 표시한다.

#### additionals

- [x] 횟수를 너무 큰 숫자(최대 20000으로 설정)로 설정하려 할 경우 alert 메시지를 표시한다.
- [x] 너무 많은 이름(최대 9개로 설정)을 등록하려 할 경우 alert 메시지를 표시한다.

### 🎯 step1

- [x] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- [x] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [x] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러명일 경우 ,를 이용하여 구분한다.

### after step1

- [x] ElementManager를 제거하고 그 클래스를 불러와 사용하는 부분의 코드를 ElementManager 내부에 구현되어 있던 코드로 대체한다.
- [x] 원시값을 리턴하거나 비교할 때 사용하는 등의 경우 그 원시값을 상수로 선언하여 사용하도록 바꾼다.
- [x] 정규표현식으로 이름 인풋에 입력할 수 있는 문자 제한 방식을 바꿔서 알파벳, 한글, 컴마만 가능하도록 바꾼다.
- [x] cypress 디렉터리에 불필요한 파일을 지운다.
- [x] class 내의 메서드들의 순서를 조정한다.
- [x] 변수명을 점검하고, 필요 시 변경한다.

### step1 review

- [x] 테스트 context를 세분화하여 분리하기
- [x] typeName함수에서 input clear하지 않기
- [x] cypress 코드 리팩터링하기
- [ ] handler라는 이름의 함수들 이름 바꾸기
- [ ] 바인드 이슈 arrow function으로 해결하기
- [ ] MVC 구조 수정하기
- [ ] 코드 리팩터링하기

### 🎯🎯 step2

- [ ] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
  - [ ] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- [ ] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

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

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-racingcar/issues) 에 등록 후 @eastjun에게 dm을 보내주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-racingcar/blob/main/LICENSE) licensed.
