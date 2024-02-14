const OutputView = {
  print(message) {
    console.log(message);
  },

  printErrorMessage(error) {
    this.print(error);
  },
};

export default OutputView;
