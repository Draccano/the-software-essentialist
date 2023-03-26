import { isPalindrome } from './index';
describe('palindrome checker', () => {
  test('Simple word is palindrome', () => {
    expect(isPalindrome('wow')).toBe(true);
  });
  test('Simple word is not palindrome', () => {
    expect(isPalindrome('Hello')).toBe(false);
  });
  test('Random cased word is palindrome even', () => {
    expect(isPalindrome('WOw')).toBe(true);
  });
});
