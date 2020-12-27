import * as fs from 'fs';
import { COUNT_ABS_PATH, COUNT_PATH, COUNT_FILETYPE } from '../contants/count';

export const INCREMENT_COUNT = 'BIRDCOUNT/INCREMENT_COUNT';
export const DECREMENT_COUNT = 'BIRDCOUNT/DECREMENT_COUNT';
export const RESET_COUNT = 'BIRDCOUNT/RESET_COUNT';

const calculateNewCount = (state = 0, action = 'UNKNOWN_ACTION') => {
  switch (action) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
    case RESET_COUNT:
      return 0;
    default:
      return state;
  }
};

export const getCurrentCount = () => {
  let runningCount;
  if (fs.existsSync(COUNT_ABS_PATH)) {
    runningCount = fs.readFileSync(COUNT_PATH, COUNT_FILETYPE);
  } else {
    runningCount = { count: calculateNewCount() };
    fs.writeFileSync(COUNT_PATH, runningCount, COUNT_FILETYPE);
  }

  return runningCount.count;
};

export const updateCount = (action) => {
  const currentCount = getCurrentCount();
  const newCount = calculateNewCount(currentCount, action);
  if (newCount !== currentCount) {
    fs.writeFileSync(COUNT_PATH, { count: newCount }, COUNT_FILETYPE);
  }
  return newCount;
};
