let counter = 0;
function inc() { counter++ }
for (let i = 0; i < 10; i++, inc());
console.log(counter)


//incrementing number
let counters = 0;
for (let i = 0; i < 10; i++) {
    counters++;
}
console.log(counters)


//for loop and let scope
// for (var i = 0; i < 10; i++) //All variables defined using let keyword require their own local scope
//     let x = i;//let variable cannot be defined without scope brackets

for (var i = 0; i < 10; i++) {
    let x = i;
    console.log(x)
}


//nested for loops
for (let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++)
        console.log(x, y)
//nested
for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
        console.log(y, x)
    }
}


//skipping steps
for (let i = 0; i < 3; i++) {
    if (i == 1)
        continue;
    console.log(i);
}

