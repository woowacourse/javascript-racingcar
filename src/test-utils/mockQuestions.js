import Console from "../utils/Console";

const mockQuestions = (inputs) => {
  const inputSpy = jest
    .spyOn(Console, "readLineAsync")
    .mockImplementation(() => {
      const input = inputs.shift();

      return Promise.resolve(input);
    });

  inputSpy.mockClear();
};

export default mockQuestions;
