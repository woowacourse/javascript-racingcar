const REGEX = Object.freeze({
  KOREAN: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/,
  ENGLISH: /^[a-zA-Z]+$/,
  NUMBER: /^[0-9]+$/,
});

module.exports = {
  REGEX,
};
