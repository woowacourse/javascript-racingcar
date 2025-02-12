# javascript-racingcar

### 구현순서
1. 경주할 자동차 이름을 입력받는다.
2. 시도할 횟수를 입력 받는다.
3. 자동차 경주를 실행한다.  
4. 실행 결과를 출력한다.
5. 최종 우승자를 뽑는다.
6. 최종 우승자를 출력한다.


### 기능 구현 사항
- 자동차
    - [ ] 이름과 진행 정도를 가질 수 있다.
    - [ ] 진행 정도를 증가시킬 수 있다.
- 자동차 레이스
    - [ ] 자동차 수 만큼 자동차 객체를 생성할 수 있다.
    - [ ] 시도할 횟수만큼 자동차 경주를 진행한다.
    - [ ] 자동차 경주 한레이스를 진행한다.
        - 무작위값이 4이상일 경우에만 자동차는 전진한다.
    - [ ] 최종 우승자를 뽑는다.
        - 자동차 객체중 진행 정도가 가장 큰 자동차 이름 혹은 이름들을 뽑는다.
- [ ] 입출력
    - [ ] 자동차 이름 입력받기
    - [ ] 시도 횟수 입력받기
    - [ ] 결과 출력

- [ ] 예외처리
  - [ ] 이름 구별시 쉼표 외의 특수문자가 존재하는 경우
  - [ ] 중복된 이름이 존재하는 경우
  - [ ] 이름이 한글자 이상 다섯자 이하가 아닌 경우
  - [ ] 시도 횟수를 숫자가 아닌 것을 입력했을 경우
  - [ ] 시도 횟수를 1미만으로 입력했을 경우
  - [ ] 입력이 빈값인 경우