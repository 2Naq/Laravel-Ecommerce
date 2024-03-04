'use strict';
// Assuming the 'select-icon' class is on your outer div
const selectIconDiv = document.querySelector('.select-icon');

selectIconDiv.addEventListener('focusin', () => {
    selectIconDiv.classList.add('focused'); // Add a temporary class
});

selectIconDiv.addEventListener('focusout', () => {
    selectIconDiv.classList.remove('focused'); // Remove the temporary class
});

console.log('slection-icon run');
