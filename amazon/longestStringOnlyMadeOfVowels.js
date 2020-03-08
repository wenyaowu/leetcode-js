/**
 * You are given with a string . Your task is to remove at most two substrings 
 * of any length from the given string such that the remaining string contains vowels('a','e','i','o','u') only. 
 * Your aim is the maximise the length of the remaining string. 
 * Output the length of remaining string after removal of atmost two substrings.
NOTE: The answer may be 0, i.e. removing the entire string.
earthproblem  --->  3
letsgosomewhere ---> 2
 */

function vowelSubstring(s) {
  const lookup = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  const m = s.length;
  // calculate the substring in the beginning and the end

  let start = 0;
  let prefix = 0;
  while (start < m && lookup[s[start]]) {
    start += 1;
    prefix += 1;
  }
  if (prefix === m) {
    return prefix; // The whole string is vowel
  }

  let end = m - 1;
  let suffix = 0;
  while (end >= 0 && lookup[s[end]]) {
    end -= 1;
    suffix += 1;
  }
  // find max substring between start and end
  let maxLength = 0;
  let currentLength = 0;
  let i = start;
  while (i <= end) {
    if (lookup[s[i]]) {
      // Vowel
      currentLength += 1;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 0;
    }

    i += 1;
  }
  return maxLength + prefix + suffix
}

console.log(vowelSubstring("earthproblem"));
console.log(vowelSubstring("letsgosomewhere"));
console.log(vowelSubstring("eeeeeleeeereeeee"));
console.log(vowelSubstring("eeeeeaaa"));
