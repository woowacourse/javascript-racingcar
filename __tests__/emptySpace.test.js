import emptySpaceEraser from "../src/util/emptySpace.js";

test.each([
  ["seo, ohgus", "seo,ohgus"],
  [" seo,ohgus ", "seo,ohgus"],
  ["se o,oh gus", "seo,ohgus"],
  [" 1", "1"],
])("입력에 공백이 있으면 제거한다.", (input, expected) => {
  const result = emptySpaceEraser(input);

  expect(result).toBe(expected);
});
