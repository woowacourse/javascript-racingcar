## 📝 Step 1 | 코드 리뷰 목록

- 리뷰어님의 리뷰내용, 해결을 위한 제 생각,이를 적용해보기 위한 Todo로 구성되어있습니다.

### 1. 테스트 코드 관련

> 단위 테스트를 할 때 마다 Controller를 돌려서 테스트하는건 적절할까? Controller 내부의 다른 부분 에러로 인해서도 해당 단위 테스트가 실패할 것이다.

- Controller 비대화와 연관된 것으로 생각되어짐.
  - [ ] Controller 내부 로직을 분리하여 다이어트 시키면서 test 코드 작성

</br>

### 2. Validation 관련

> 사용자의 정상적인 입력을 기대하고 냅다 로직을 돌리기보다는, validation을 통해 안전성을 강화하는 것이 필수적

- 사용자별로 (,) (, )로 구분하는 사람들 충분히 있을 수 있음

  - [ ] inputView에서 `trim` 으로 공백 제거

- 사용자가 글을 읽지 않고 스페이스로 구분하여 입력하거나 이름 사이에 공백 넣을 수 있음

  - [ ] (,)로 분리 후 trim도 해주고도(InputView에서) 공백 포함, 입력값이 빈 배열인 경우 Error 발생 시키기

</br>

### 3. 상수 관리 관련

> 관된 상수들을 모듈 내에 포함시켜 놓는 것도 좋으나 크기가 조금만 커져도 가독성에 문제가 발생할 수 있다

- [x] Constants 폴더에 따로 분리

</br>

### 4. MVC 패턴 관련

> MVC 패턴을 사용하다보면 자연스럽게 Model, View 말고는 전부 Controller에 때려박는 방향으로 흘러가는 경우가 많다보니 Controller가 비대해지곤 하니 조금 더 분리해보자.

- [ ] Controller 다이어트 시키기

  - [ ] Controller 내부에 있던 검증 로직 따로 분리하기
  - 검증 로직은 Model 내부에 두고 싶다면 이를 위해 따로 Model을 만드는것도 좋을까?
  - [ ] Validator 폴더로 따로 분리

  - [ ] Controller 내부에 있던 우승자 판별 로직을 Car 객체에 넣어보기

</br>

### 5. 캡슐화 관련

> 모듈 안에서만 사용되는 함수라면 private으로 은닉하자. 단순히 test를 위해 노출시킨것이라면 노출된 함수들을 테스트하자.

- [x] InputView 안의 `readLineAsync` 은닉하기
- [x] `readLineAsync`을 은닉한 후 노출된 함수(`readCars`,`readTry`)를 테스트하도록 테스트 코드 수정

### 6. 추상화 관련

> 불필요한 추상화로 인해서 협업시 문제 발생 할 수 있다.

- [x] OutputView의 printMessage 삭제

</br>

### 7. 리팩토링 관련

> early return을 잘 사용해보자.

- [ ] OutputView의 `printWinner` 함수 early return 사용하여 리팩토링하기.
