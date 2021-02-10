export const initializeInputView = function () {
  document.querySelector("#car-names-input").value = "";
  document.querySelector("#count-input").value = "";
  document.querySelector("#count-container").style.display = "none";
};

export const displayCountView = function () {
  document.querySelector("#count-container").style.display = "block";
};

export const toggleCarNameInputDisable = function () {
  document
    .querySelector("#car-names-input")
    .toggleAttribute("disabled", "disabled");
  document
    .querySelector("#car-names-submit")
    .toggleAttribute("disabled", "disabled");
};

export const toggleCountInputDisable = function () {
  document
    .querySelector("#count-input")
    .toggleAttribute("disabled", "disabled");
  document
    .querySelector("#count-submit")
    .toggleAttribute("disabled", "disabled");
};
