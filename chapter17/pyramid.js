"use strict";
let count = 1;
let n = 3;
let pattern = "";
for (let i = 1; i < 9; i++) {if(i%2!=0){
    for (let j = 0; j < n; j++) {
        pattern += ' ';
    }
    for (let k = 0; k < i; k++) {
        pattern += "*";
    
    } for (let l = 0; l < n; l++) {
        pattern += ' ';
    } if(i<7){ pattern += '\n';}  
    n=n-1;
}}
console.log(pattern.split("\n"));