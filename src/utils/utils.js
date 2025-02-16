/**
 *  startNumber부터 endNumber 사이의 랜덤한 정수를 반환한다.
 * @param startNumber
 * @param endNumber
 * @returns {number}
 */

export const generateRandomNumber = (startNumber = 0, endNumber = 9) => {
  return Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;
};
