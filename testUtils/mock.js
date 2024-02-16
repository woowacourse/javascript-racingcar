import RandomUtil from "../src/utils/RandomUtil.js";

export const mockPickRandomNumberBetween = (numbers) => {
  RandomUtil.pickRandomNumberBetween = jest.fn();

  numbers.forEach((number) => {
    RandomUtil.pickRandomNumberBetween.mockReturnValueOnce(number);
  });
};
