const Line1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const Line1UP = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const Line2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const Line2UP = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const Line3 = ["z", "x", "c", "v", "b", "n", "m"];
const Line3UP = ["Z", "X", "C", "V", "B", "N", "M"];

const Line01 = document.querySelector(".line1");
const Line02 = document.querySelector(".line2");
const Line03 = document.querySelector(".line3");

const Buttons = document.querySelectorAll(".Buttons");
const Keyboard = document.getElementById("Keyboard");
const Input = document.getElementById("input");
const Shift = document.getElementById("Shift");
const CpasLight = document.getElementById("CpasLight");

const elements = document.getElementsByClassName("lowercase");
const Uelements = document.getElementsByClassName("uppercase");

for (const lett in Line1) {
  let button = document.createElement("button");
  button.textContent = Line1[lett];
  button.setAttribute("key-data", Line1[lett]);
  button.className = "Buttons BW lowercase";
  Line01.appendChild(button);
}
for (const lett in Line1UP) {
  let button = document.createElement("button");
  button.textContent = Line1UP[lett];
  button.setAttribute("key-data", Line1UP[lett]);
  button.className = "Buttons BW uppercase hidden";
  Line01.appendChild(button);
}

for (const lett in Line2) {
  let button = document.createElement("button");
  button.textContent = Line2[lett];
  button.setAttribute("key-data", Line2[lett]);

  button.className = "Buttons BW lowercase";
  Line02.appendChild(button);
}
for (const lett in Line2UP) {
  let button = document.createElement("button");
  button.textContent = Line2UP[lett];
  button.setAttribute("key-data", Line2UP[lett]);
  button.className = "Buttons BW uppercase hidden";
  Line02.appendChild(button);
}
for (const lett in Line3) {
  let button = document.createElement("button");
  button.textContent = Line3[lett];
  button.setAttribute("key-data", Line3[lett]);

  button.className = "Buttons BW lowercase";
  Line03.appendChild(button);
}
for (const lett in Line3UP) {
  let button = document.createElement("button");
  button.textContent = Line3UP[lett];
  button.setAttribute("key-data", Line3UP[lett]);
  button.className = "Buttons BW uppercase hidden";
  Line03.appendChild(button);
}

let letter;
let Capsflag = true;

function ChangeBgColor(key) {
  key.classList.add("active");
  setTimeout(() => {
    key.classList.remove("active");
  }, 200);
}
function WriteText(letter) {
  Input.value += letter;
}
function caps() {
  Capsflag = !Capsflag;
  CpasLight.classList.toggle("Light");

  if (Capsflag === false) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("hidden");
      Uelements[i].classList.toggle("hidden");
    }
  } else if (Capsflag === true) {
    for (let i = 0; i < elements.length; i++) {
      Uelements[i].classList.toggle("hidden");
      elements[i].classList.toggle("hidden");
    }
  }
}

Input.addEventListener("keydown", function (event) {
  letter = event.key;
  console.log(event);
  if (letter === "CapsLock") {
    caps(Capsflag);
  }

  const keyElement = document.querySelector(`[key-data="${letter}"]`);
  if (event.code) {
    if (keyElement) {
      // console.log(keyElement);
      ChangeBgColor(keyElement);
    }
  }
});

Keyboard.addEventListener("click", function (event) {
  const keyElement = event.target.closest(".Buttons");
  // console.log(event)

  // console.log(keyElement);
  if (keyElement) {
    letter = keyElement.getAttribute("key-data");
    if (letter.length === 1) {
      ChangeBgColor(keyElement);
      WriteText(letter);
    }
    if (letter === "CapsLock") {
      caps(Capsflag);
      ChangeBgColor(keyElement);
    }
    if (letter === "Enter") {
      ChangeBgColor(keyElement);
      WriteText("\n");
    }
    if (letter === "ShiftLeft") {
      ChangeBgColor(keyElement);
    }
    if (letter === "ShiftRight") {
      ChangeBgColor(keyElement);
    }
  }
});

let ShiftFlag = true;
Input.addEventListener("keydown", function (event) {
  let keyS = event.code;
  if (ShiftFlag === true) {
    console.log(keyS);
    const keyElement = document.querySelector(`[key-data="${keyS}"]`);
    if (keyS === "ShiftLeft") {
      keyElement.classList.add("active");
      caps();
    } else if (keyS === "ShiftRight") {
      keyElement.classList.add("active");
      caps();
    }
    ShiftFlag = false;
  }
});

Input.addEventListener("keyup", function (event) {
  let keyS = event.code;

  // console.log(keyS)
  const keyElement = document.querySelector(`[key-data="${keyS}"]`);
  if (keyS === "ShiftLeft") {
    caps();
    keyElement.classList.remove("active");
  } else if (keyS === "ShiftRight") {
    keyElement.classList.remove("active");
    caps();
  }
  ShiftFlag = !ShiftFlag;
});
