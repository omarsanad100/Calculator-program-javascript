const display = document.getElementById("display");

const appendToDisplay = (e) => {
  display.value += e;
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "🤪🤡";
  }
};

const clearDisplay = () => {
  display.value = "";
};
