export const isPalindrome = (str: string): boolean => {
  if (typeof str != 'string' || !str) return false;

  const halfOfString = str.length / 2;
  const lastCharIndex = str.length - 1;
  for (let i = 0; i < halfOfString; i++) {
    if (str[i] !== str[lastCharIndex - i]) {
      return false;
    }
  }
  return true;
};
