/*
Given an array of words and a width maxWidth, format the text such that each line has exactly 
maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; 
that is, pack as many words as you can in each line. 
Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. 
If the number of spaces on a line do not divide evenly between words, 
the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
Example 1:

Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.
Example 3:

Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
] */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let res = [];
  let index = 0;
  while (index < words.length) {
    // Find the index range of the words that can fit in current sentence
    let count = words[index].length;
    let last = index + 1; // the index of last word in the list that can be fit into current sentence
    while (last < words.length) {
      if (count + words[last].length + 1 > maxWidth) {
        break;
      }
      count += words[last].length + 1;
      last += 1;
    }

    let diff = last - index - 1;
    let s = words[index];
    // Distribute spaces
    // Last line or if the line ony contain 1 word, left justify
    if (diff === 0 || last === words.length) {
      s = words.slice(index, last).join(" ");
      while (s.length < maxWidth) {
        s += " ";
      }
    } else {
      let space = Math.floor((maxWidth - count) / diff);
      let extra = (maxWidth - count) % diff;
      for (let i = index+1; i < last; i++) {
        
        s += new Array(space + 1).fill(" ").join("");
        if(extra > 0) {
          s+=" ";
          extra-=1;
        }
        s+=words[i];
      }
    }
    // Otherwise, equally distribute spaces

    res.push(s);
    index = last; // Last is not included in this sentence, so we start at last
  }
  return res;
};

console.log(
  fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
);

console.log(
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do"
    ],
    20
  )
);
