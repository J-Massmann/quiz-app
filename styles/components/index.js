function changeImg() {
  const image = document.querySelector('[data-js="button-bookmark"]');
  if (image.src == "http://127.0.0.1:3000//images/bookmark-regular.svg") {
    image.src = "http://127.0.0.1:3000//images/bookmark-fill.svg";
  } else {
    image.src = "http://127.0.0.1:3000//images/bookmark-regular.svg";
  }
}
