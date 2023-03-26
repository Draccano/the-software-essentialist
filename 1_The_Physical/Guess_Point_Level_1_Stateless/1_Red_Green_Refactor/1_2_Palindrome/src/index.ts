export const isPalindrome = (str: string): boolean => {
  if (typeof str != 'string' || !str) return false;

  const input = str.toLowerCase().replace(/\s/g, '');

  const halfOfString = input.length / 2;
  const lastCharIndex = input.length - 1;
  for (let i = 0; i < halfOfString; i++) {
    if (input[i] !== input[lastCharIndex - i]) {
      return false;
    }
  }
  return true;
};
