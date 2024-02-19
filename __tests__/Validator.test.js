import { validateCarName, validateCarNameArray } from "../src/domain/Validator";
import {
  CarNameLengthError,
  CarNameRangeError,
  CarNameTypeError
} from "../src/error/CustomError";

describe("Validator unit test", () => {

  test.each([
    ["a"],
    ["abc"],
    ["abcde"],
  ])("입력된 자동차 이름의 길이가 1자 이상 5자 이하여야 한다. ", (input) => {

    expect(() => { validateCarName(input) }).not.toThrow();
  });

  test.each([
    ["abcdef"],
    ["todari"],
    ["toomuchlongname"],
  ])("입력된 자동차 이름의 길이가 1자 이상 5자 이하가 아니라면, CarNameLengthError를 반환한다. ", (input) => {

    expect(() => { validateCarName(input) }).toThrowError(new CarNameLengthError());
  });

  test.each([
    ["abc"],
    ["자동차"],
    ["부릉부릉"],
  ])("입력된 자동차 이름의 형식이 한글 혹은 영문이이어야 한다. ", (input) => {

    expect(() => { validateCarName(input) }).not.toThrow();
  });

  test.each([
    ["ㄱㄴㄷ"],
    [",,,"],
    ["大好き"],
  ])("입력된 자동차 이름의 한글 혹은 영문이 아니라면, CarNameTypeError를 반환한다. ", (input) => {

    expect(() => { validateCarName(input) }).toThrowError(new CarNameTypeError());
  });

  test.each([
    [["김", "이", "박"]],
    [["a", "b", "c"]],
    [["부릉부릉"]],
  ])("입력된 자동차 이름의 1개 이상 50개 이하여야 한다. ", (input) => {

    expect(() => { validateCarNameArray(input) }).not.toThrow();
  });

  test.each([
    [[]],
    [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y", "z", "A", "B", "C", "D",
      "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
      "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
      "Y", "Z"]]

  ])("입력된 자동차 이름의 1개 이상 50개 이하가 아니라면, CarNameRangeError를 반환한다. ", (input) => {

    expect(() => { validateCarNameArray(input) }).toThrowError(new CarNameRangeError());
  });

});
