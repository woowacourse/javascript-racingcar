const splitByComma = (string) => {
  return string.split(",");
};

const trimAll = (stringArr) => {
  stringArr.map((s) => s.trim());
};

export { splitByComma, trimAll };
