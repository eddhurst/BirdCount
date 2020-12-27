import document from 'document';

const countShown = document.getElementById('countShown');

const btnIncrement = document.getElementById('btnIncrement');
const btnSubtract = document.getElementById('btnSubtract');

export const renderCount = (count) => { countShown.text = count; };

export const btnIncrementCallback = (fn) => {
  btnIncrement.addEventListener('click', fn);
};

export const btnDecrementCallback = (fn) => {
  btnSubtract.addEventListener('click', fn);
};
