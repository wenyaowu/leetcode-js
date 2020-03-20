/**
 * 

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let res = ""

    let p1 = num1.length -1;
    let p2 = num2.length -1;
    let carry = 0;
    while(p1 >= 0 || p2 >= 0) {
        let sum = ((p1 >= 0 ? toNum(num1[p1]) : 0) + (p2 >= 0 ? toNum(num2[p2]) : 0) + carry);
        carry = Math.floor(sum/10);
        digit = sum % 10;
        
        res = `${digit}` + res; 
        p1-=1;
        p2-=1;
    }

    return carry ? `${carry}` + res : res;

    function toNum(char) {
        return char.charCodeAt(0) - "0".charCodeAt(0);
    }
};

