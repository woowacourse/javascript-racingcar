function consolePrint(query) {
  if (arguments.length !== 1) {
    throw new Error('arguments must be 1');
  }
  console.log(query);
}

export default consolePrint;
