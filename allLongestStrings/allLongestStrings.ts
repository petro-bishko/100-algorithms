function allLongestStrings(inputArray: string[]): string[] {
  let longerWordsLength = 0;

  const arrayStrings = [];

  for (let item of inputArray) {
    longerWordsLength = longerWordsLength < item.length ? item.length : longerWordsLength;

    if (item.length === longerWordsLength) {
      arrayStrings.push(item);
    }
  }
  return arrayStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
