function adjacentElementsProduct(inputArray: number[]): number {
  let largProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];

    largProduct = product > largProduct ? product : largProduct;
  }

  return largProduct;
}

console.log(adjacentElementsProduct([9, 9, -2, -5, 7, 3, 8]));
