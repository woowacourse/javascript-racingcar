const consoleErrorWithConditionalAlert = (error, errorNameForAlert) => {
  console.error(error);
  if (error.name === errorNameForAlert) {
    alert(error.message);
  }
};

export default consoleErrorWithConditionalAlert;
