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

## 🎯 구현할 기능 목록

### Step1

- #### 자동차 이름 입력 받기
  - 자동차 이름을 쉼표를 기준으로 구분한다.
  - 자동차 이름 양 끝단의 공백을 제거한다.
  - 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.
- #### 자동차 이름 유효성 검증하기

  - 자동차 이름 길이가 1 이상 5 이하인지 검증한다.

      <details>
      <summary>예</summary>
      입력받은 문자열: "김, 이,박 , , 최 정 "
      >> 자동차 이름 배열: ["김", "이", "박", <span style="background:skyblue">""</span>, "최 정"]
      파싱한 문자열: " 가운데 공백 "<br>
      양 공백 제거 후: "가운데 공백"<br>
      >> 이름 길이: <span style="background:skyblue">6</span>
      </details>

  - 자동차 이름에 중복이 있는지 검증한다.

      <details>
      <summary>예</summary>
      입력받은 문자열: "김, 김, 이"<br>
      자동차 이름 배열: [<span style="background:skyblue">"김"</span>, <span style="background:skyblue">"김"</span>, "이"]<br>
      </details>

- #### 자동차 생성하기
  - 입력받은 자동차 이름들로 자동차를 생성한다.
- #### 레이싱 횟수 입력 받기
  - 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.
  - 자동차 이름을 먼저 입력받지 않고 레이싱 횟수 확인 버튼을 누르면 alert을 이용해 메시지를 보여주고, 레이싱 횟수 인풋을 초기화하고 자동차 이름을 입력하게 한다.
- #### 레이싱 횟수 유효성 검증하기

  - 양의 정수인지 검증한다.

      <details>
      <summary>예</summary>
      입력받은 문자열: "10.2" <br>
      >> 양의 정수 아님 <br>
      입력받은 문자열: "0" <br>
      >> 양의 정수 아님 <br>
      입력받은 문자열: "-1" <br>
      >> 양의 정수 아님 <br>
      </details>

  - *레이싱 횟수 최대값*보다 작은지 검증한다. (임의로 100으로 정함.)
    레이싱 횟수 범위가 요구사항에 명시되어 있지 않았기 때문에 *레이싱 횟수 최댓값*을 100으로 정했습니다.

      <details>
      <summary>예</summary>
      입력받은 문자열: "999"<br>
      >> 100보다 큼<br>
      </details>

- #### 레이스 진행하기
  - 입력받은 횟수만큼 레이스를 진행한다.
  - 0에서 9 사이에서 무작위 값을 생성한다.
  - 무작위 값이 4 이상일 경우 자동차를 전진시킨다.
  - 마지막 레이스의 결과로 최종 우승자를 구한다.
- #### 결과 렌더링하기

  - 우승자가 여러 명일 수 있다.
  - 우승자가 여러 명일 경우 쉼표를 이용하여 구분한다.

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-racingcar/blob/main/LICENSE) licensed.
