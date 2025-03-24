const image = document.querySelector("img");

const swapImage = () => {
  let src = image.getAttribute("src");
  if (src === "assets/black-bitcoin.png") {
    image.setAttribute("src", "assets/gold-bitcoin.png");
  } else {
    image.setAttribute("src", "assets/black-bitcoin.png");
  }
};

image.addEventListener("click", swapImage);
