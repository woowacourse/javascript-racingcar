const sections = document.getElementsByTagName("section");

const hideElement = (element) => {
  return (element.style.display = "none");
};

const resetView = (elementIdArray) => {
  for (let elementId of elementIdArray) {
    hideElement(sections[elementId]);
  }
};

const setSectionDataID = () => {
  for (let idx = 0; idx < sections.length; idx++) {
    sections[idx].dataset.id = `${idx}`;
  }
};

const init = () => {
  setSectionDataID();
  resetView([2, 3, 4]);
};

init();
