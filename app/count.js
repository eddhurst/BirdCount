const INCREMENT_COUNT = 'BIRDCOUNT/INCREMENT_COUNT';
const DECREMENT_COUNT = 'BIRDCOUNT/DECREMENT_COUNT';

const calculateNewCount = (state = 0, action = 'UNKNOWN_ACTION') => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
    default:
      return state;
  }
};

export default calculateNewCount;
