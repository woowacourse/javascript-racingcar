import readline from 'readline';

/**
 * @module Console
 * 애플리케이션의 입/출력을 담당하는 유틸리티 모듈
 */
const Console = Object.freeze({
  /**
   * @param {string} message - 유저에게 전달할 메시지
   * @returns {Promise<string>} 유저가 입력한 값의 Promise
   */
  readLineAsync(query) {
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
  },

  /**
   * @param {string} message - 전달 받은 문자열
   * @returns {void}
   */
  print(message) {
    console.log(message);
  },
});

export default Console;
