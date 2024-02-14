export default parser = {
  splitByComma(string) {
    return string.split(",");
  },

  trimAll(stringArr) {
    stringArr.map((s) => s.trim());
  },
};
