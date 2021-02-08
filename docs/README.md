# 자동차 경주 게임 1단계
페어프로그래밍: 심바 && 동동

## 1. 환경 설정
1. yarn을 이용하여 package 초기화: `yarn init`
2. eslint 설치: `yarn add eslint --dev`
3. prettier 설치: `yarn add prettier --dev`
4. eslint-config-prettier, eslint-plugin-prettier 설치: `yarn add eslint-config-prettier eslint-plugin-prettier --dev`
5. eslint 설정: `npx eslint --init`  prettier, cypress plugin 및 extends 추가 . eslint:recommended 컨벤션을 적용. 
6. .vscode/settings.json: 모든 파일에 대하여 저장시 eslint 및 prettier 적용됨
   ※ prettier 설정은 기본 설정 그대로.(별도로 설정하지 않음)
7. cypress 설치: `yarn add cypress --dev`

## 2. 구조 설계
1. Model
   1. 레이싱카 객체
      - 필드 : 이름, 무브먼트
      - 메서드 : 무브

2. View
   1. `lap-input-container`을 렌더한다.
   2. `car-player`을 렌더한다.
   3. `forward-icon`을 렌더한다.
   4. `game-result-container`을 렌더한다.

3. Controller
   1. 이름 입력 받기
   2. 횟수 입력 받기
   3. 횟수만큼 반복하는 기능
   4. 갈지 안갈지 결정하는 기능
   5. 다시 시작하면 초기화하는 기능

## 3. 기능 구현
1. 자동차 이름 입력하기
   Given(주어진 환경)
   - 유저에게 자동차 경주 화면이 렌더링 된다.
   When(행위)
   - 유저가 자동차 이름 입력 란에 자동차 이름을 입력한다.
   1. 성공
      행위: EAST, WEST, SOUTH, NORTH
      Then(기대 결과)
      - 횟수를 입력 받는 화면이 렌더링 된다.
      - car-player(EAST, WEST, SOUTH, NORTH) 렌더링 된다.
      - 자동차 이름은 쉼표(,)를 기준으로 구분된다.
  
   2. 실패
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