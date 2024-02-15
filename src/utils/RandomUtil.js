const RandomUtil = {
  // mocking 을 위해 객체로 생성했음 -> 수정 필요
  pickRandomNumber() {
    return Math.floor(Math.random() * 10);
  },
};

export default RandomUtil;
