const heading = document.querySelector("h1");
const button = document.querySelector("button");

const createUserName = () => {
  const userName = prompt("Enter your name: ");
  if (!userName) {
    createUserName();
  } else {
    localStorage.setItem("userName", userName);
    heading.textContent = `Hello, ${userName}!`;
  }
};

if (!localStorage.getItem("userName")) {
  createUserName();
} else {
  const storedName = localStorage.getItem("userName");
  heading.textContent = `Hello, ${storedName}!`;
}

button.addEventListener("click", createUserName);
