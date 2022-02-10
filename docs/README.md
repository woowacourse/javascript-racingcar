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

## 구현 기능 목록

1. Figma 시안을 참고하여 UI 템플릿을 작성한다.

2. 게임에 참여할 자동차 이름을 입력 받는 기능

-   사용자는 게임에 참여할 자동차 이름을 입력한다.

-   이름은 쉼표(,)를 기준으로 구분한다.

-   유효성 검사를 통과하지 못 하면 `alert`로 에러 메시지 출력

-   유효성 검사를 통과했을 때, 경주를 진행할 수 있는지 확인한다.

-   유효성 검사 조건
    -   각 이름은 `5`자 이하만 가능하다. ex) `moreThanFive`
    -   각 이름에는 공백이 포함될 수 없다. ex) `spa ce`

3. 시도 횟수를 입력 받는 기능

-   사용자는 시도 횟수를 입력한다.

-   유효성 검사를 통과하지 못 하면 `alert`로 에러 메시지 출력

-   유효성 검사를 통과했을 때, 경주를 진행할 수 있는지 확인한다.

-   유효성 검사 조건
    -   시도 횟수는 자연수다.

4. 각 자동차는 0 ~ 9 사이의 악셀을 랜덤하게 밟는 기능

-   악셀의 세기가 4이상일 때 전진

5. 사용자가 입력한 시도횟수만큼 기능 4번을 반복한 후 print 하는 기능

-   자동차들의 현재 전진 횟수만큼 화살표 표시

6. 우승자 출력 기능

-   경주 게임이 완료되면 우승자를 알려준다.

-   가장 많이 전진한 자동차 이름을 받아와서 출력한다. 우승자가 여러 명인 경우, 쉼표(,)를 이용하여 구분한다.

7. 다시 시작하기 기능

-   다시 시작하기 버튼을 누르면 사용자 입력값과 결과를 리셋한다.
