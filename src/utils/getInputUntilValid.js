async function getInputUntilValid(processFunc) {
  while (true) {
    try {
      await processFunc();

      break;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default getInputUntilValid;
