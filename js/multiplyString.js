/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const m = num1.length;
    const n = num2.length;
    // initialize the array up to m+n length
    const res = new Array(m+n);
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let multiple = charToNum(num1[i]) * charToNum(num2[j]);
            let p1 = i+j+1;
            let p2 = i+j;

            res[p1] += multiple;

            let carry = Math.floor(res[p1]/10);
            res[p1] = res[p1] % 10;
            res[p2] += carry;
        }
    }
    return res.reverse().join("");
};


function charToNum(char) {
    return char.charCodeAt(0) - "0".charCodeAt(0);
}