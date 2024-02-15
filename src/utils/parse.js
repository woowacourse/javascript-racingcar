const splitByComma = (string) => {
  return string.split(",");
};

const trimAll = (stringArr) => {
  return stringArr.map((s) => s.trim());
};

export { splitByComma, trimAll };
