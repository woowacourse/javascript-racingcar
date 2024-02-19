import Random from "../utils/random";

const mockRandoms = (numbers) => {
  const randomSpy = jest.spyOn(Random, "pickNumberInRange");

  randomSpy.mockImplementation(() => {
    const number = numbers.shift();
    return number;
  });

  randomSpy.mockClear();
};

export default mockRandoms;
