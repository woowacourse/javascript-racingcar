/**
 * min과 max 사이에서 랜덤한 정수 값을 반환한다.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export default getRandomNumber;
