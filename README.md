<p align="middle" >
  <img width="200px;" src="https://user-images.githubusercontent.com/50367798/106415730-2645a280-6493-11eb-876c-ef7172652261.png"/>
</p>
<h2 align="middle">level1 - 자동차 경주 게임</h2>
<p align="middle">자바스크립트로 구현 하는 자동차 경주 게임</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

### 🎯 기능 요구사항
#### 렌더링 관련 요구사항 

- [x] 첫화면에서는 제목과 자동차 이름 입력창만 보여지도록 한다.
- [x] 유저가 자동차 이름을 유효하게 입력했을 때 시도 횟수 입력창이 렌더링 된다.
- [x] 자동차이름과 횟수를 입력하면 화면에 자동차 경기 화면이 렌더링 된다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- [x] 우승자와 함께 다시시작하기 버튼을 렌더링한다.
#### 자동차 이름 입력 요구사항 
##### 입력 예외사항 
  - [x] 빈칸을 입력하면 alert로 메세지를 보여준다 
  - [x] 자동차 이름이 5자를 초과하면 alert로 메세지를 보여준다 (단, trim을 거친 후 이름의 길이에 대해서만 고려) 
  - [x] 사용자가 잘못 입력했을 때에는 input text를 초기화한다.
#### 시도할 횟수 입력 요구사항 

##### 입력 예외사항 
  - [x] 빈칸을 입력하면 alert로 메세지를 보여준다 
  - [x] 1이상 20이하의 자연수를 입력하지 않으면 alert로 메세지를 보여준다
  - [x] 숫자가 아닌값을 입력한 경우 alert로 메세지를 보여준다

- [x] 유저가 입력한 자동차 개수만큼 Car 인스턴스를 생성한다. 
- [x] 0~9사이의 랜덤한 값을 구한다. 
- [x] 만약 자신의 랜덤값이 4이상일 경우 해당 자동차는 전진을 한다. 
- [x] 유저가 입력한 시도 횟수만큼 랜덤한 값을 구해서 자동차가 전진한다
- [x] 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] 다시시작하기 버튼을 눌렀을 때 refresh한다.
### 테스트 요구사항
- [x] 자동차 입력값에 대한 test를 작성한다.
- [x] 시도횟수 입력값에 대한 test를 작성한다.
- [x] 우승자에 관한 결과가 랜더링 되는지에 대한 test를 작성한다.
- [x] 다시 시작하기 버튼을 눌렀을 때 refresh되는지에 대한 test를 작성한다.
- [x] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 E2E 테스트를 작성한다.
### UI
- [x] figma 시안을 기준으로 마크업 작성하기.
- [x] figma 시안을 기준으로 스타일 구현하기.


## 2단계 미션 요구사항들 

- [x] 유저가 자동차 이름과 시도 횟수를 성공적으로 입력한 경우, 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 화살표를 랜더링 한다 
- [x] 1초의 텀동안 로딩 애니메이션을 보여준다.
- [x] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- [x] 사용자가 입력한 시도 횟수만큼 턴을 돌며 화살표를 모두 렌더링 하면 우승자를 렌더링 한다.
- [x] 우승자를 렌더링 한 후에 2초 후에 축하의 alert 메세지를 보여준다

#### 테스트 요구사항
  
- [x] 우승자가 렌더링 된 후 2초 후에 축하의 alert 메세지를 보여주는지 확인한다. 

#### UI
- [x] figma 시안을 기준으로 구현한다.

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
