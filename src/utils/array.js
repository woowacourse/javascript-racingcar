export const swap = (array, indexA, indexB) => {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
};
