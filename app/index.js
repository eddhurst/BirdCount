import { vibration } from 'haptics';
import document from 'document';
import { BUTTON_PUSH_INCREMENT, BUTTON_PUSH_DECREMENT } from '../contants/vibration';

let count = 0;
const countShown = document.getElementById('countShown');

const renderCount = (number) => { countShown.text = number; };

const onIncrement = () => {
  vibration.stop();
  count += 1;
  renderCount(count);
  vibration.start(BUTTON_PUSH_INCREMENT);
};

const onSubtract = () => {
  count -= 1;
  renderCount(count);
  vibration.start(BUTTON_PUSH_DECREMENT);
};

const btnIncrement = document.getElementById('btnIncrement');
const btnSubtract = document.getElementById('btnSubtract');

btnIncrement.addEventListener('click', onIncrement);
btnSubtract.addEventListener('click', onSubtract);
