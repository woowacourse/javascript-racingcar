import readlinePromises from "node:readline/promises";

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const utils = {
  print(message) {
    console.log(message);
  },

  readLine(query) {
    return rl.question(query);
  },

  close() {
    rl.close();
  },
};

export { utils };
