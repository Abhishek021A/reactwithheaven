const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";
    } 
    else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } 
    else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } 
    else {
      display.value += value;
    }
  });
});


document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    display.value += e.key;
  } 
  else if (e.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } 
  else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } 
  else if (e.key === "Escape") {
    display.value = "";
  }
});
