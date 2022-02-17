const $ = (selector, node = document) => {
  const nodeList = node.querySelectorAll(selector);
  if (nodeList.length === 1) {
    return nodeList[0];
  }
  return nodeList;
};

export default $;
