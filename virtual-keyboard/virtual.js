

const $ = document
const titleElem = $.querySelector(".title")
const liElem = $.querySelectorAll("li")
const currentText = ""

$.addEventListener("keydown", function (event) {
  console.log(event.code)

  appendValueToDom(event)

  let userEventKey = event.key.toUpperCase()
  let mainKeyElem = $.getElementById(userEventKey)

  if (event.code === "ShiftLeft") {
    mainKeyElem = $.getElementById("SHIFT-left");
  } else if (event.code === "ShiftRight") {
    mainKeyElem = $.getElementById("SHIFT-right");
  }

  if (mainKeyElem) {
    mainKeyElem.classList.add("hit");
    mainKeyElem.addEventListener("animationend", function () {
      mainKeyElem.classList.remove("hit");
    });
  }
});

function appendValueToDom(event) {
  if (
    event.key === "Tab" ||
    event.key === "Shift" ||
    event.key === "Escape" ||
    event.key === "Control" ||
    event.key === "Alt" ||
    event.key === "CapsLock"
  ) {
    event.preventDefault();
    return;
  }
  if (event.key === "Backspace") {
    event.preventDefault()
    titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
    return
  }
  titleElem.innerHTML += event.key
}


