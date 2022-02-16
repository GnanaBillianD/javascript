let strings = "hello"
let matches = strings.match("l")//String.match with string argument only returns the first match
console.log(matches[0]);//'l'

let stringss = "hello"
let matchess = stringss.match(/l/)
console.log(matchess[0]);//'l'


let stri = "hello";
let mat = stri.match(/l/g);///g flag does return multiple matches
console.log(mat);//'l' 'l'



// const string = 'black*raven lime*parrot white*seagull';
// const regex = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;
// while (match = regex.exec(string))
// {
//     let value = match[0];
//     let index = match.index;
//     let input = match.input;
//     console.log(`${value} at ${index} with '${input}'`);
//     console.log(match.groups.color);
//     console.log(match.groups.bird);
// }


// let string = "hello"
// let iterator = string.matchAll(/[el]/g)
// for(let match of iterator)
// console.log(match);




const string = 'black*raven lime*parrot white*seagull';
const regex = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;
for (let match of string.matchAll(regex))
{
    let value = match[0];
    let index = match.index;
    let input = match.input;
    console.log(`${value} at ${index} with '${input}'`);
    console.log(match.groups.color);
    console.log(match.groups.bird);
}


// //example1
// let regax = /t(e)(st(\d?))/g;
// let str = 'test1test2';
// let array= [...str.matchAll(regax)];
// console.log(array)



//example2
// const s1 = "Easy Javascript is very Easy to learn";
// const s2 = /Easy/g;
// const s3 = s1.matchAll(s2);

// for(const match of s3){
//     console.log(match);
// }