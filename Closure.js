function wrapValue(n){
  let local=n;
  return ()=>local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1(5));
console.log(wrap2());

function multiplier(factor){
 return number=>number*factor;
}

let twice = multiplier(2);
console.log(twice(5));

function multiply(){
  return (n,m)=>n*m;
}

var t = multiply();

console.log(t(44,12));