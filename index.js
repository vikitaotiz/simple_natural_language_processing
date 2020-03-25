const nlp = require('compromise');
nlp.extend(require('compromise-numbers'));

let price = document.querySelector('#price'); 
let digit = document.querySelector('#digit'); 
let btn = document.querySelector('button'); 
let output = document.querySelector('.output');

let processInput = (e) => {
    e.preventDefault();
    if(e.keyCode === 13){
        let doc = nlp(price.value);
        let str = doc.values().toNumber().out();
        output.innerHTML = `<h2>${str}</h2>`;
    }
};

price.addEventListener('keyup', processInput);
