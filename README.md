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

- - [ ] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
  - - [ ] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- - [ ] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
- - [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

<br>

## 📝 1단계 구현 기능 목록

- 자동차 이름 입력
  - [x] 올바른 자동차 이름을 입력한 후 확인버튼을 누르면 시도횟수 입력창을 화면에 출력한다.
    > - [x] 'EAST, WEST, SOUTH, NORTH'를 입력하면 화면에 시도횟수 입력창이 표시되는지 테스트한다.
  - [x] 올바르지 않은 자동차 이름을 입력한 경우 경고메세지를 출력한다.
    > - [x] 'YUJOYOONHO'을 입력한 경우 '이름은 5글자 이하로 입력해 주세요.' 경고메세지를 출력하고 입력창을 초기화 하는지 테스트한다.
    > - [x] 공백만 입력된 경우나 아무것도 입력되지 않은 경우 '공백만으로는 이름을 구성할 수 없습니다.' 경고메세지를 출력하고 입력창을 초기화 하는지 테스트한다.
- 시도 횟수 입력
  - [x] 양의 정수만을 시도횟수로 입력할 수 있게 한다.
    > - [x] '-7'을 입력한 경우 '1 이상의 숫자를 입력해주세요.' 경고메세지를 출력하고 입력창을 초기화 하는지 테스트한다.
    > - [x] 공백만 입력된 경우나 아무것도 입력되지 않은 경우 '1 이상의 숫자를 입력해주세요.' 경고메세지를 출력하고 입력창을 초기화 하는지 테스트한다.
  - [x] 올바른 시도횟수를 입력한 후 확인버튼을 누르면 앞서 자동차 경주 진행화면을 표시해준다.
    > - [x] 자동차 경주 진행화면이 visible 상태인지 테스트한다.
    > - [x] 화면에 표시된 자동차 대수와 입력된 자동차 대수가 일치하는지 테스트한다.
    > - [x] 화면에 표시된 자동차 이름과 입력된 자동차 이름이 일치하는지 테스트한다.
- 자동자 경주 진행
  - [x] 자동차 경주가 정상적으로 진행되는지 테스트 한다.
    > - [x] 난수를 생성하는 함수가 0 ~ 9 사이의 정수를 반환하는지 테스트한다.
    > - [x] 전진횟수를 결정하는 함수가 '[1, 3, 3, 7]'을 입력받았을 때 '1'을 반환하는지 테스트한다.
    > - [x] 게임진행 결과에 따라 각 자동차에 화살표 갯수가 제대로 표시되는지 테스트한다.
- 결과 출력
  - [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 화면에 출력한다. 우승자가 여러명일 경우 ,를 이용하여 구분해서 출력한다.
    > - [x] 최종 우승자가 `🏆 최종 우승자: ${쉼표로 구분된 우승자 목록} 🏆`와 일치하는지 테스트한다.
- 게임 다시 시작
  - [x] 다시 시작버튼을 누르면 초기 화면을 출력해서 게임을 다시시작할 수 있도록 한다.
    > - [x] 시도횟수 입력창, 게임진행 화면, 게임 결과 화면이 모두 보이지 않는 상태인지 테스트한다.
    > - [x] '#game-process-screen' 노드가 비어있음을 확인하여 게임 진행 내용을 초기화 되었는지 테스트한다.
    > - [x] 자동차이름 입력창과 시도횟수 입력창이 초기화 되었는지 테스트한다.

## 📝 1단계 피드백 반영 목록

1. Model-View 분리

- [x] $cars를 통해 DOM을 직접 다루지 않고 Class를 이용한다.
- [x] getWinners()에서 DOM 접근 부분과 비즈니스 로직을 분리한다.
- [x] 테스트에서 getWinners()과 비슷한 로직의 코드를 중복되는 부분을 정리한다.

2. 변수명을 더 명확하게

- [x] 'NAME_BLANK', 'VALIDATOR', 'EFFECTIVE_SCORE' 보다 더 의미를 명확하게 나타내는 이름으로 짓는다.

3. 함수명은 의도를 드러내도록

- [x] 함수 이름은 동사 + 명사(적용할 값) 형태로 짓는다. 원래 함수의 의도를 숨기지 않는다.
- [x] isSomething과 같이 Boolean을 반환하는 함수는 긍정문으로 작성한다.

4. 함수는 이름에 맞는 한 가지 기능만
   [x] isValid...()에서 alert가 호출되는 사이드이펙트가 없도록 한다.
5. 사용하지 않는 반환값의 리턴은 지양

- [x] 단지 라인수를 줄이기 위해 반환하지 않아도 될 값을 리턴문에 합쳐서 작성하지 않는다.

6. 기타

- [x] 불필요한 new 연산자를 사용하지 않는다.
- [x] 테스트문에 오타를 수정한다.

## 📝 2단계 구현 기능 목록

- 자동자 경주 진행
  - [x] 게임 한 판을 1초 동안 진행한다.
  - [x] 게임 진행 중에는 로더를 화면에 표시하고 게임이 완료되면 표시를 없앤다.
- 결과 출력
  - [ ] 게임완료 2초 후 축하 alert 메세지를 표시한다.
