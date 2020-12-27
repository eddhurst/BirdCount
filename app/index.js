import { vibration } from 'haptics';
import * as ui from './ui';
import { BUTTON_PUSH_INCREMENT, BUTTON_PUSH_DECREMENT } from '../contants/vibration';
import {
  getCurrentCount, updateCount, INCREMENT_COUNT, DECREMENT_COUNT,
} from './count';

const onIncrementCount = () => {
  const count = updateCount(INCREMENT_COUNT);
  vibration.start(BUTTON_PUSH_INCREMENT);
  ui.renderCount(count);
};

const onSubtractCount = () => {
  const count = updateCount(DECREMENT_COUNT);
  vibration.start(BUTTON_PUSH_DECREMENT);
  ui.renderCount(count);
};

ui.btnIncrementCallback(onIncrementCount);
ui.btnDecrementCallback(onSubtractCount);
ui.renderCount(getCurrentCount());
