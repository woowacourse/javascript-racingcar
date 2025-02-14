async function retryUntilSuccess(fn, ...args) {
  while (true) {
    try {
      return await fn(...args);
    } catch (error) {
      console.log(`${error.message}\n`);
    }
  }
}

export default retryUntilSuccess;
