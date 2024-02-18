import getRandomNumberInRange from '../../../../utils/getRandomNumberInRange';

const mockRandomNumberInRange = numbers => {
  jest.mock('../../../../utils/getRandomNumberInRange');
  console.log(getRandomNumberInRange);
  numbers.forEach(n => {
    getRandomNumberInRange.mockReturnValueOnce(n);
  });
};

export default mockRandomNumberInRange;
