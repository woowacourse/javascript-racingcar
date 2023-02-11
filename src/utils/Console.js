import { createInterface } from 'readline';

const Console = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default Console;
