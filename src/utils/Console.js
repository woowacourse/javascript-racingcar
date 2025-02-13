import readline from "readline";

const Console = {
  readLineAsync(query) {
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
  },
  print(message) {
    console.log(message);
  },
  printErrorMessage(errorMessage) {
    console.log(`[ERROR] ${errorMessage}\n`);
  },
  printLineBreak() {
    console.log();
  },
};

export default Console;
