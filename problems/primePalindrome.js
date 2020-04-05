/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(N) {
    if(8 <= N  && N <= 11) {
        return 11;
    }
    
    for(let i = 1; i <  100000; i++) {
        let s = i.toString();
        let reverse = s.split("").reverse().join("")  // We dont need to consider palidrome with even length, it can always be divided by 11
        // We create palindrome to avoid check all the nums
        /**
         * For example, if i = 321
         * s = 321, reverse = 123
         * s + reverse.substring(1) = 32123 <--- Check if this is prime
         */
        let num = +(s + reverse.substring(1));
        if(isPrime(num) && num >= N) {
            return num
        }
    }
};

function isPrime(num) {
    if(num < 2) {
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true;
}