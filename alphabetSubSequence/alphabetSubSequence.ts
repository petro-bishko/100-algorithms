function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split('');
  const charValue: number[] = [];

  chars.forEach((char: string) => {
    charValue.push(char.charCodeAt(0));
  });

  if (new Set(charValue).size !== charValue.length) {
    return false;
  }

  for (let i = 0; i < charValue.length - 1; i++) {
    if (charValue[i] >= charValue[i + 1]) {
      return false;
    }
  }

  return true;

}

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
