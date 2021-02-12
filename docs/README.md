# 자동차 경주 게임 1단계

페어프로그래밍: 심바 && 동동

## 1. 환경 설정

1. yarn을 이용하여 package 초기화: `yarn init`
2. eslint 설치: `yarn add eslint --dev`
3. prettier 설치: `yarn add prettier --dev`
4. eslint-config-prettier, eslint-plugin-prettier 설치: `yarn add eslint-config-prettier eslint-plugin-prettier --dev`
5. eslint 설정: `npx eslint --init` prettier, cypress plugin 및 extends 추가 . eslint:recommended 컨벤션을 적용.
6. .vscode/settings.json: 모든 파일에 대하여 저장시 eslint 및 prettier 적용됨
   ※ prettier 설정은 기본 설정 그대로.(별도로 설정하지 않음)
7. cypress 설치: `yarn add cypress --dev`

## 2. 구조 설계

1. Model
   1. 레이싱카 모델
      - 필드 : 이름, 무브먼트
      - 메서드 : 무브(무브먼트의 값 1 증가)

2. View
   1. 레이싱카 뷰
      - 필드 : 각 레이싱카의 `div` 엘리먼트
      - 메서드 : `car-player`을 렌더링, `forward-icon`을 렌더링

3. Controller
   1. 이름 입력 받기
   2. 횟수 입력 받기
   3. 횟수만큼 반복하는 기능
   4. 갈지 안갈지 결정하는 기능
   5. 다시 시작하면 초기화하는 기능

4. ViewController
   1. `container`를 나타내고 숨기는 기능
   2. 버튼을 활성화/비활성화 시키는 기능

## 3. 기능 구현

1.  자동차 이름 입력하기
    
    Given(주어진 환경)

    - 유저에게 자동차 경주 화면이 렌더링 된다.

    When(행위)

    - 유저가 자동차 이름 입력 란에 자동차 이름을 입력한다.

      ### 실패
       
       행위 : WOOCOURSE, SIMBA, DONGDONG
       
       Then(기대 결과)
       - alert - '자동차 이름은 5자 이하로 지어주세요.'
       - 자동차 이름은 5자 이하이다.

       행위 : SIMBA
       
       Then(기대 결과)
       - alert - '두 개 이상의 자동차 이름을 입력해주세요.'
       - 자동차 이름은 두 개 이상이다.

       행위 :
       
       Then(기대 결과)
       - alert - '두 개 이상의 자동차 이름을 입력해주세요.'
       - 자동차 이름은 빈 값이 아니다.
       
       ### 성공
       
       행위: EAST, WEST, SOUTH, NORTH
       
       Then(기대 결과)
       - 횟수를 입력 받는 화면이 렌더링 된다.
       - car-player(EAST, WEST, SOUTH, NORTH) 렌더링 된다.
       - 자동차 이름은 쉼표(,)를 기준으로 구분된다.

2.  시도할 횟수 입력하기
    
    Given(주어진 환경)

    - 유저에게 자동차 경주 화면이 렌더링된 후,
    - 유저가 자동차 이름 입력 란에 자동차 이름("EAST, WEST, SOUTH, NORTH")을 입력한다.
    - 자동차 이름이 쉼표(,)를 기준으로 구분되어, .car-player(EAST, WEST, SOUTH, NORTH)가 렌더링되어 있다.

    When(행위)

    - 유저가 시도할 횟수 란에 시도할 횟수값을 입력후 확인 버튼을 클릭한다.

      ### 실패

      행위 : "", "abcd", "10x39d", "-=", "한국말", "10+10"

      Then(기대 결과)
      - alert: "숫자를 입력해주세요"
      - 시도할 횟수 란을 공란으로 한다.

      행위 : "-1", 0, "-5.6"

      Then(기대 결과)
      - alert: "1 이상 20 이하의 정수를 입력해주세요"
      - 시도할 횟수 란을 공란으로 한다.

      행위 : "21", "369", "1e3"

      Then(기대 결과)
      - alert: "1 이상 20이하의 정수를 입력해주세요"
      - 시도할 횟수 란을 공란으로 한다.

      행위 : "1.342", "-2.43", "0.111111"

      Then(기대 결과)
      - alert: "1 이상 20이하의 정수를 입력해주세요"
      - 시도할 횟수 란을 공란으로 한다.

      ### 성공

      행위 : 1, 3, 20, 1e1

      Then(기대 결과)

      - 게임 진행상황이 렌더링된다.
        - 주어진 횟수 동안 4대의 자동차가 전진한만큼 화살표가 표시된다.

      - 게임 결과가 렌더링된다.
        - 우승자가 여러명일 경우 ,를 이용하여 구분한다.

3.  다시 시작 버튼 클릭하기
    Given(주어진 환경)

    - 유저에게 자동차 경주 화면이 렌더링된 후,
    - 유저가 자동차 이름 입력 란에 자동차 이름("EAST, WEST, SOUTH, NORTH")을 입력한다.
    - 자동차 이름이 쉼표(,)를 기준으로 구분되어, .car-player(EAST, WEST, SOUTH, NORTH)가 렌더링되어 있다.
    - 유저가 시도할 횟수 입력 란에 12를 입력한다.
    - 게임 진행 상황과 게임 결과가 렌더링되어 있다.

    When(행위)

    - 유저가 다시 시작 버튼을 클릭한다.

    Then(기대 결과)

    - 유저에게 자동차 경주 게임 타이틀과 자동차 이름 입력란만 보인다.

    When(행위)

    - 유저가 다시 시작 버튼을 클릭한다.
    - 게임을 다시 한 번 진행한다.(올바른 경우로)

    Then(기대 결과)

    - 게임이 다시 시작된 후에도, 정상적으로 작동한다.
