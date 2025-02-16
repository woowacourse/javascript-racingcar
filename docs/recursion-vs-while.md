# 🌟 재귀 호출 vs. while 문

### ✅ 기존 코드 (재귀 호출)

```js
import Console from "./Console.js";

const getValidInput = async (inputFn, validateFn) => {
  try {
    const input = await inputFn();
    return validateFn(input);
  } catch (error) {
    Console.printErrorMessage(error.message);
    return getValidInput(inputFn, validateFn);
  }
};

export default getValidInput;
```

처음에는 위와 같은 `재귀 호출 방식`으로 구현했다.
프리코스 때도 별 생각 없이 재귀 방식이 좀 더 `indent depth`가 작기 때문에 이 방식을 채택했었다.
하지만 이 방식에는 아래와 같은 문제가 발생할 수 있었다.

### 📌 문제점

**1️⃣ 무한 재귀 가능성**

- 입력이 계속 유효하지 않은 경우 무한 루프에 빠짐.
- e.g., `validateFn`에서 계속 에러를 던지는 경우 `스택 오버플로우`가 발생할 수 있음.

**2️⃣ `validateFn`이 유효한 값을 반환하지 않는 경우**

- `validateFn`이 `throw`가 아니라 `false`나 `undefined` 같은 값을 반환하면 무한 루프에 빠질 가능성이 있음.

여기서 내가 계속 마주했던 문제는 입력값이 `undefined`가 되었을 때 무한 루프가 계속 발생했다는 것이었다.

---

### ✅ 수정 코드 (while)

따라서 이 문제를 해결하기 위해 재귀 호출 대신 `while`을 통한 반복문을 사용하기로 했다.

```js
import Console from "./Console.js";

const getValidInput = async (inputFn, validateFn) => {
  while (true) {
    try {
      const input = await inputFn();
      return validateFn(input);
    } catch (error) {
      Console.printErrorMessage(error.message);
    }
  }
};

export default getValidInput;
```

### 📌 개선점

1️⃣ `while` 문을 사용함으로써 무한 재귀 호출로 인한 스택 오버플로우를 방지할 수 있음.

2️⃣ `validateFn`이 정상적으로 실행되면, 즉 유효한 값인 경우 `return`으로 즉시 값을 반환하여 `getValidInput` 함수를 종료함.

---

### ❓ 그렇다면 왜 while 문은 스택 오버플로우를 방지할 수 있을까?

**1️⃣ 재귀 함수는 호출 스택을 사용한다.**

- 재귀 호출이 발생할 때마다 함수의 실행 컨텍스트가 콜 스택(call stack) 에 쌓인다.
- 쉽게 말하자면, 재귀 호출을 하면 함수가 종료되지 않고 함수가 계속해서 실행되는 것이다. 그렇기에 스택의 공간이 초과되는 스택 오버플로우가 발생하는 것이다. 😱

**2️⃣ while 루프는 호출 스택을 사용하지 않는다.**

- while 문은 반복문이기 때문에 딱 한 번의 실행 컨텍스트만 사용된다.
- 즉, 함수 호출 없이 단순한 조건문 검사와 코드 실행이 반복되므로 스택이 쌓이지 않는다.
