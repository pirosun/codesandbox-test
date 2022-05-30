import "./styles.css";

const onClickAdd = () => {
  // get textbox value
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div make
  const div = document.createElement("div");
  div.className = "list-row";

  // <li> make
  const li = document.createElement("li");
  li.innerText = inputText;

  div.appendChild(li);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
