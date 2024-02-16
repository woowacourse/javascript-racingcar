export function count(arr) {
  let count = arr.filter((element) => element === true).length;
  return count;
}
