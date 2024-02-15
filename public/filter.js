
// // Import the entire contents of script.js
// import * as script from '/script.js';

function filter(){
    let selector = document.getElementsByClassName('.filter');
    let selectedValue = selector.value;

    if (selectedValue === 'name') {
        console.log(selectedValue)
    } ;
}

