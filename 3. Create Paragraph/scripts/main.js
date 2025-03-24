const buttons = document.querySelectorAll("button");

const createParagraph = () => {
  const paragraph = document.createElement("p");
  paragraph.textContent = "Hello World!";
  document.body.appendChild(paragraph);
};

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
