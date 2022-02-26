//The super keyword is used to access and call functions on an object's parent. 
// function towerBuilder(n) {
//     return Array.from({length: n}, function(v, k) {
//       spaces = ' '.repeat(n - k - 1);
//      return spaces + '*'.repeat( k+ k + 1) + spaces ;
//    });
//  }
//  console.log(towerBuilder(10).join("\n"))



//right angle triangle
function towerBuilder(n) {
  return Array.from({ length: 10 }, function (v, k) {
    return '*'.repeat(k + 1);
  });
}

for (i = 0; i < 10; i++) {
  let inerval = setTimeout(towerBuilder, 1000 * i)
  console.log(towerBuilder(6).join("\n"))
}



