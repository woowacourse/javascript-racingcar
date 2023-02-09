const REGEX = Object.freeze({
  korean: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/,
  english: /^[a-zA-Z]+$/,
  number: /^[0-9]+$/,
});

module.exports = {
  REGEX,
};
