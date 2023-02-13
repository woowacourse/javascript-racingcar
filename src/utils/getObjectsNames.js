function getObjectsName(objectList) {
  const objectNames = [];
  objectList.forEach((object) => {
    objectNames.push(object.getName());
  });
  return [...objectNames];
}

module.exports = getObjectsName;
