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

const getRandomIntBetween = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

const getLongestString = (...strings) => {
  return strings.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
};

export { getRandomIntBetween, readLineAsync, getLongestString };
