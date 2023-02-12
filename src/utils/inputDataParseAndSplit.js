function inputDataParseAndSplit(str) {
  const inputDatas = str.split(',');
  const inputDataList = inputDatas.map((data) => data.trim());
  return inputDataList.slice();
}

module.exports = inputDataParseAndSplit;
