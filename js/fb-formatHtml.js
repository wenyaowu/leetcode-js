Input: <p>The <b>quick</b> brown <i>fox</i> jumps over a lazy dog.</p>
Char limit: 30
Incorrect output: <p>The <b>quick</b> brown <i>f
Correct output: <p>The <b>quick</b> brown </p>

/**

currentSrting = "<p>The <b>quick</b> brown </p>"

*/


// provided
class HTMLHelper:

constructor(input: string):

getNextToken(): { type: 'OPEN' | 'TEXT' | 'CLOSE', data: string }
// 1st: { type: 'OPEN', data: 'p' }
// 2nd: { type: 'TEXT', data: 'The ' }
// 3rd: { type: 'OPEN', data: 'b' }

// implement
function trim(input: string, limit: number): string {

if(!input || input.length === 0) {
return "";
}

const helper = HTMLHelper(string);
// Valid text => For each open tag, it needs to be a close tag as well
const stack = [];  // {tag: <p>, startIndx: 0}
let currentString = ""

// Keep adding token, until 30 chars
while(currentString.length < 30) {
let token = helper.getNextToken();
if(currentString.length + token.data.length <= 30) {
  // when we encounter open tag, we push it into stack
  if(token.type === 'OPEN') {
    stack.push({
      tag: token.data,
      startIndex: currentString.length,
      // length: token.data.length
    })
  } else if(token.type === 'CLOSE') {
    stack.pop();
  }
  currentString += token.data;
} else {
  break;
}
}    

// (1) a string that's less than 30 
// (2) a stack with residual open tag

while(stack.length > 1) {
// keep removing tag until the stack has last open tag
let last = stack.pop();
currentString.substring(last.startIndex);
}

// pop out the last tag, append the close tag for it
let veryLast = stack.pop();
currentString += getCloseTagFromOpenTag(veryLast.tag);

return currentString
}

function getCloseTagFromOpenTag(openTag) {
//....This exists
}