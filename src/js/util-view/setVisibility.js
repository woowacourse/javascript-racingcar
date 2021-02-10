export const setVisibility = ($target, isToBeVisible) => {
  if (isToBeVisible) {
    $target.hidden = false;
  } else {
    $target.hidden = true;
  }
};
