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

- [ ] 첫화면에서는 제목과 입력창들만 보여지도록 한다.
- [ ] 자동차이름과 횟수를 입력하면 화면에 자동차 경기 화면이 렌더링 된다.
- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [ ] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

#### 자동차 이름 입력 요구사항 
##### 입력 예외사항 
  - [ ] 빈칸을 입력하면 alert로 메세지를 보여준다 
  - [ ] 자동차 이름이 5자를 초과하면 alert로 메세지를 보여준다 (단, trim을 거친 후 이름의 길이에 대해서만 고려) 
  - [ ] 자동차 개수는 최대 5개까지 입력할 수 있다 5개를 초과하면 alert로 메세지를 보낸다

#### 시도할 횟수 입력 요구사항 

##### 입력 예외사항 
  - [ ] 빈칸을 입력하면 alert로 메세지를 보여준다 
  - [ ] 1이상의 자연수를 입력하지 않으면 alert로 메세지를 보여준다
  - [ ] 소수점 값을 입력하면 alert로 메세지를 보여준다 
  - [ ] 20초과의 수를 입력하면 alert로 메세지를 보여준다 

- [ ] 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- [ ] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [ ] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [ ] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [ ] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [ ] 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.
### 테스트 요구사항
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 E2E 테스트를 작성한다.
### UI
- [x] figma 시안을 기준으로 마크업 작성하기.
- [x] figma 시안을 기준으로 스타일 구현하기.

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
