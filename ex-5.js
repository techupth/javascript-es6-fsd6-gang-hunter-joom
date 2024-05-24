/*function sum(a,b,c,d,...f) {
  // Start coding here !
return a+b+c+d+f
}*/
function sum(...input) {
  // Start coding here !
  let totalSum = input.reduce((acc,curr)=> acc + curr,0);
  return totalSum

}

console.log(sum);
let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);


