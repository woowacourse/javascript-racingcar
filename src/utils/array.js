/**
 * @template T
 * @param {T[]} array - 특정 배열
 * @param {number} indexA - 스왑을 위한 A 인덱스
 * @param {number} indexB - 스왑을 위한 B 인덱스
 */
export const swap = (array, indexA, indexB) => {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
};
