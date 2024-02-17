import readline from "readline";

export const readLineAsync = (query) => {
  return new Promise((resolve, reject) => {
    if (!query) {
      reject(new Error("query must be given"));
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
};

export const print = (query) => {
  console.log(query);
};
