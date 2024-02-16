async function retryWhenErrorOccurs(callback) {
  while (true) {
    try {
      return await callback();
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default retryWhenErrorOccurs;
