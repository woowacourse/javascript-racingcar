export function numberMoveSuccess(traceList) {
  const count = traceList.filter((element) => element === true).length;
  return count;
}
