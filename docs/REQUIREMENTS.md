# 기능 목록

1. 경주할 자동차 이름 입력
2. 시도할 횟수 입력
3. 실행 결과 표시
4. 게임 우승자 표시
5. 에러(예외 상황) 표시

- 이름 입력이 잘못된 경우
  - 쉼표가 없는 경우
  - 중복된 이름인 경우(대문자, 소문자 체크)
  - 이름 길이가 5자 초과인 경우, 2자 미만인 경우
  - 자동차 개수가 20개 초과인 경우
- 시도 횟수가 잘못된 경우
  - 시도 횟수 20번 초과한 경우
  - 자연수가 아닌(음수인) 경우
  - 문자인 경우

# 리팩토링(피드백 반영) 목록

- [x] 필드값이 존재하지 않는 class 인스턴스를 오브젝트로 변경한다.
- [x] Application Test 시 상황을 좀 더 상세히 저술한다.
- [x] Application Test 시 mock 함수를 이용하여 숫자를 넣었던 것을 모르는 사람이 읽어도 이해할 수 있도록 상수화 한다.
- [x] Car Test 시 Array.prototype을 사용했던 것을 2개 함수를 실행하여 테스트 설정으로 변경한다.
- [x] Validation Test 시 어떤 상황에서 어떤 에러 문구가 나오는 지 세부적으로 테스트 한다.
- [x] App.js와 Controller의 play()가 중첩되는 상황을 변경한다.
- [x] isNotNumber 의 암묵적 형변환을 예상하여 방어 로직을 작성한다.
- [x] GAME_STRING.alphabetExpression 을 REG_EXP.onlyAlphabet으로 변경한다.
- [x] 자동차 이름을 받아 모델을 생성할 때 forEach에서 map으로 변경한다.
- [x] 가장 멀리 진행된 자동차를 Math.max 메서드를 이용해 계산한다.
- [x] 우승자를 계산할 때 forEach에서 reduce로 변경한다.
- [x] utils 함수에서 isMove 함수를 Car Model로 이동한다. (자동차 이동 관련 로직이기 때문에)
- [x] printGameProgress의 인자를 3개에서 2개로 변경하고 공백을 출력하는 기능을 분리한다.
- [x] Random getNumber 메서드를 getCarGameNumber 메서드로 이름 변경
- [x] Controller를 RacingGame으로 변경

# 2단계 미션 리팩토링 목록

- [x] 도메인 로직은 domain 폴더 하위, UI 관련 로직은 view 폴더 하위에서 관리한다.
- [x] 도메인 로직은 UI 로직 하위의 모듈을 의존하지 않아야 한다.
- [ ] 도메인 로직을 단위 테스트하기 쉽게 분리한다.
- [ ] 테스트 코드에서 jest.fn() (모킹 함수 테스트) 를 사용하지 않는다.
