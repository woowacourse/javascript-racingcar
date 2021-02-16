# 자동차 경주 게임 1단계

## 1. 환경 설정

1. yarn을 이용하여 package 초기화: `yarn init`
2. cypress 설치: `yarn add cypress --dev`
3. eslint 설치: `yarn add eslint --dev`
4. prettier 설치: `yarn add prettier --dev --exact`
   - .prettier.json 설정: `echo {}> .prettierrc.json` // 별도로 옵션을 설정하지 않고 기본 설정 그대로 사용한다
   - .prettierignore 설정: cypress/integration 외 cypress내 디렉토리는 모두 무시하도록 설정
5. eslint-config-prettier 설치: `yarn add eslint-config-prettier --dev`
6. eslint 설정: `yarn eslint --init`
   - prettier, cypress plugins 및 extends 추가
   - eslint:recommended 컨벤션 적용
7. .vscode/settings.json 설정
   - 모든 파일에 대하여 저장시 eslint 및 prettier 적용
   - editor 탭사이즈는 2, 탭 대신 스페이스 사용
   - 패키지매니져로 yarn을 사용함을 명시
   - 항상 마지막 줄에 빈 라인을 추가

## 2. 구조 설계

1. Model: CarModel
   - 필드 : name, moveCount
   - 메서드 : move
2. View: ViewController, CarView
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

### 자동차 이름 입력하기

1. Given(주어진 환경)
   - 유저에게 자동차 경주 화면이 렌더링 된다.
2. When(행위)
   - 유저가 자동차 이름 입력 란에 자동차 이름을 입력한다.
   - 자동차 이름은 5자 이하이다.
   - 자동차 이름은 두 개 이상이다.
   - 자동차 이름은 빈 값이 아니다.
   - 자동차 이름은 쉼표(,)를 기준으로 구분된다.
3. Then(기대 결과)
   - 시도할 횟수를 입력 받는 화면이 렌더링 된다.
   - 입력된 각 자동차 이름(.car-player)이 렌더링 된다.

### 시도할 횟수 입력하기

1. Given(주어진 환경)
   - 유저에게 자동차 경주 화면이 렌더링된 후,
   - 유저가 자동차 이름 입력 란에 자동차 이름("EAST, WEST, SOUTH, NORTH")을 입력한다.
   - 자동차 이름이 쉼표(,)를 기준으로 구분되어, .car-player(EAST, WEST, SOUTH, NORTH)가 렌더링되어 있다.
2. When(행위)
   - 유저가 시도할 횟수 란에 시도할 횟수값을 입력후 확인 버튼을 클릭한다.
   - 시도할 횟수는 1보다 크고 20보다 작은 정수이다.
3. Then(기대 결과)
   - 게임 진행상황이 렌더링된다.
     - 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
   - 주어진 횟수 동안 4대의 자동차가 전진한만큼 화살표가 표시된다.
   - 게임 결과가 렌더링된다.
     - 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
   - 우승자가 여러명일 경우 ,를 이용하여 구분한다.

### 다시 시작 버튼 클릭하기

1. Given(주어진 환경)
   - 유저에게 자동차 경주 화면이 렌더링된 후,
   - 유저가 자동차 이름 입력 란에 자동차 이름("EAST, WEST, SOUTH, NORTH")을 입력한다.
   - 자동차 이름이 쉼표(,)를 기준으로 구분되어, .car-player(EAST, WEST, SOUTH, NORTH)가 렌더링되어 있다.
   - 유저가 시도할 횟수 입력 란에 12를 입력한다.
   - 게임 진행 상황과 게임 결과가 렌더링되어 있다.
2. When(행위)
   - 유저가 다시 시작 버튼을 클릭한다.
3. Then(기대 결과)
   - 유저에게 자동차 경주 게임 타이틀과 자동차 이름 입력란만 보인다.
