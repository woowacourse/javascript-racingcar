async function loopWhileValid(fn, ...args) {
  while (true) {
    try {
      return await fn(...args);
    } catch (error) {
      console.log(error.message);
      console.log();
    }
  }
}

export default loopWhileValid;
