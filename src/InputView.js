import readline from "readline";
function readLineAsync(query) {
    return new Promise((resolve, reject) => {
      if (arguments.length !== 1) {
        reject(new Error("arguments must be 1"));
      }

      if (typeof query !== "string") {
        reject(new Error("query must be string"));
      }

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(query, (input) => {
        rl.close();
        resolve(input);
      });
    });
  }

class InputView {  
 async readCarNames() {
    const name = await readLineAsync("자동차 이름을 입력하세요 > ");
    return name;
  }
}
  
export default InputView;