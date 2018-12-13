function add(param1: number, param2: number): number {
  return param1 + param2;
}

// used for loop
function add2(...params: number[]): number {
  let total: number = 0;
  for (let key of params) {
    total += key;
  }
  return total;
}

// use reduce method
function add3(...params: number[]): number {
  return params.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));

console.log(add3(1, 2, 3, 4, 5, 1));
console.log(add3(2, 3, 1));

