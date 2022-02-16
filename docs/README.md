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
<br />

## 🎯 구현 기능 목록

1. 게임에 참여할 자동차 이름을 입력 받는 기능

    - 사용자는 게임에 참여할 자동차 이름을 입력한다.

    - 이름은 쉼표(,)를 기준으로 구분한다.

    - 유효성 검사를 통과하지 못 하면 `alert`로 에러 메시지를 출력한다.

    - 유효성 검사를 통과했을 때, 경주를 진행할 수 있는지 확인한다.

    - 유효성 검사 조건

        - 각 이름은 5자 이하만 가능하다. ex) moreThanFive
        - 각 이름에는 공백이 포함될 수 없다. ex) spa ce

2. 턴 횟수를 입력 받는 기능

    - 사용자는 턴 횟수를 입력한다.

    - 유효성 검사를 통과하지 못 하면 `alert`로 에러 메시지 출력

    - 유효성 검사를 통과했을 때, 경주를 진행할 수 있는지 확인한다.

    - 유효성 검사 조건

        - 턴 횟수는 자연수다.

3. 게임 준비

    - 자동차 이름 입력값 정보를 바탕으로 Car instance를 만든다.

4. 게임 진행

    - 게임의 턴은 각 진행마다 1초의 텀을 두고 점진적으로 진행된다.

    - 각 턴마다 모든 자동차는 전진을 시도한다.

        - 0 ~ 9 사이의 random 값을 구하여 4 이상인 경우, 전진

    - 각 턴마다 게임 진행 상황을 출력한다.

        - 1초의 텀 동안 로딩 애니메이션을 보여준다.
          이때 `setInterval`, `setTimeout`, `requestAnimationFrame`을 활용한다.
        - 자동차들의 현재 전진 횟수만큼 화살표로 표시한다.

5. 게임 종료

    - 게임 결과(우승자)를 출력한다.
        - 가장 많이 전진한 자동차 이름을 받아와서 출력한다.
        - 우승자가 여러 명인 경우, 쉼표(,)를 이용하여 구분한다.
    - 결과 출력 2초 후, 축하 `alert` 메세지를 띄운다.

6. 다시 시작하기 기능

    - 다시 시작하기 버튼을 누르면 사용자 입력값과 결과를 리셋한다.

### 테스트 요구사항

-   위 기능들이 정상적으로 동작하는지 Cypress를 이용해 E2E 테스트를 작성한다.

### UI

-   Figma 시안을 기준으로 UI 템플릿을 작성한다.
    -   HTML
    -   CSS
