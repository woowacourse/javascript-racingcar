const getRandomNumberInRange = (from, to) => {
  if (isNaN(from) || isNaN(to)) {
    throw new Error('[ERROR] 범위의 시작과 끝은 숫자여야 합니다.');
  }
  return Math.floor(Math.random() * (to - from + 1));
};

export default getRandomNumberInRange;
