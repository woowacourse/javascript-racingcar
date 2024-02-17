import readline from 'readline';

/**
 * 사용자에게 입력값을 받아서, 받은 입력값을 반환하는 함수 입니다.
 * @param { string } query 사용자에게 안내할 입력 문구
 * @returns
 */

function asyncReadLineHandler(query) {
  return new Promise((resolve, reject) => {
    if (arguments.length !== 1) {
      reject(new Error('arguments must be 1'));
    }

    if (typeof query !== 'string') {
      reject(new Error('query must be string'));
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
export default asyncReadLineHandler;
