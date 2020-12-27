import document from 'document';

const countShown = document.getElementById('countShown');

const btnIncrement = document.getElementById('btnIncrement');
const btnSubtract = document.getElementById('btnSubtract');
const btnReset = document.getElementById('btnReset');
const btnSpecies = document.getElementById('btnSpecies');

export const renderCount = (count) => { countShown.text = count; };

export const btnIncrementCallback = (fn) => {
  btnIncrement.addEventListener('click', fn);
};

export const btnDecrementCallback = (fn) => {
  btnSubtract.addEventListener('click', fn);
};

export const btnResetCallback = (fn) => {
  btnReset.addEventListener('click', fn);
};

btnReset.addEventListener('click', () => { console.log('Restore session'); });
btnSpecies.addEventListener('click', () => { console.log('View species list'); });
