function absoluteValuesSumMinimization(a: number[]): number {
  // check if length of numbers is even or odd
  const isEven = a.length % 2 === 0;

  // return medium value if there few return smaller one
  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length - 2)];
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
