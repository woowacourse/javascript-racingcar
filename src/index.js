import readLineAsync from "./Input.js";

// 입출력 예시
async function run() {
  const name = await readLineAsync(
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분)."
  );
}

run();
