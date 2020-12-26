import { vibration } from "haptics";
import document from "document";

const VIBRATION_TYPE = {
  INCREMENT: "confirmation",
  SUBTRACT: "confirmation"
}

let btnIncrement = document.getElementById("btnIncrement");
let btnSubtract = document.getElementById("btnSubtract");
let countShown = document.getElementById("countShown");

let count = 0;

let renderCount = (number) => countShown.text = number;

let onIncrement = (event) => {
  vibration.stop()
  count = count + 1;
  renderCount(count);
  vibration.start(VIBRATION_TYPE.INCREMENT);
}

let onSubtract = (event) => {
  count = count - 1;
  renderCount(count); 
  vibration.start(VIBRATION_TYPE.SUBTRACT)
}

btnIncrement.addEventListener("click", onIncrement);
btnSubtract.addEventListener("click", onSubtract);