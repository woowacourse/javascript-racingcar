import readLineAsync from "./Input.js";
import Validate from "./Validate.js";

// 입출력 예시
async function run() {
  const name = await readLineAsync(
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n"
  );

  //TODO: 자동차 이름 길이를 검증하는 코드 필요요
  // const names = name.split(",");
  // const validate = new Validate();

  const count = await readLineAsync("시도할 횟수는 몇 회인가요?\n");
}

run();
