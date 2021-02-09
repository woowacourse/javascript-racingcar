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

#### 기능 목록

- [x] 초기화면 (타이틀, 이름 입력)
- [x] 자동차 이름 입력 받기
  - [x] 문자열 내 공백 예외 처리
  - [x] 1자 이상 5자 이하
  - [x] 네이밍 범위 (한글, 영어, 숫자만 가능)
  - [x] 중복 여부 확인
- [x] 시도 횟수 입력 받기
  - [x] 양의 정수
- [x] 경주 진행
  - [x] 랜덤 함수
  - [x] 진행 상황 렌더링
- [x] 최종 우승자 렌더링
- [x] 재시작 버튼
  - [x] 렌더링
  - [x] 클릭시 앱 초기화

#### 테스트 케이스

- [ ] 브라우저 진입시 초기화면이 알맞게 렌더링 된다.
- [x] 자동차 이름의 값을 입력하고 예상된 결과값을 확인한다.
  - [x] 최소 2대 이상
  - [x] 이름에 공백이 있을 때
  - [x] 이름의 길이 범위
  - [x] 네이밍 범위
  - [x] 이름에 중복이 있을 때
- [x] 시도 횟수의 값을 입력하고 예상된 결과값을 확인한다.
  - [x] 숫자가 아닌 값이 들어갔을 때
  - [x] 0 이하인 경우
  - [x] 소수가 들어갔을 떄
- [x] 이름과 횟수의 인풋값이 모두 통과되었을 때 결과 화면을 알맞게 렌더링 한다.
- [x] 재시작 버튼을 눌렀을 때 앱이 초기화 되는지 확인한다.

### 🎯🎯 step2

- [ ] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
  - [ ] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- [ ] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

<br>
