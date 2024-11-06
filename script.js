const express = require('express');
const app = express();


document.querySelector("#btn-search").addEventListener("click", function (){
    fetch(`/trips/${document.querySelector('#add-departure').value}/${document.querySelector('#add-arrival').value}/${document.querySelector('#add-date').value} `)
    .then (response => response.json())
    .then(data => {
        if (!response.ok) {document.querySelector('#result-trip').innerHTML += 
            `<div id="result-trip">
            <img id="train" src="./images/notfound.png" />
            <p>no trip found</p>})`}
        else {document.querySelector('#result-trip').innerHTML += 
          `
          departure: ${data.value},
          arrival: ${data.value},
          date${data.value},
          `
        }
     })
    });

