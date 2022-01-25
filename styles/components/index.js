function changeImg() {
  const image = document.querySelector('[data-js="button-image"]');
  console.log(image.src);
  if (image.src.includes("/images/bookmark-regular.svg")) {
    image.src = "/images/bookmark-fill.svg";
  } else {
    image.src = "/images/bookmark-regular.svg";
  }
}

const buttonElement = document.querySelector('[data-js="button-bookmark"]');
buttonElement.addEventListener("click", changeImg);
