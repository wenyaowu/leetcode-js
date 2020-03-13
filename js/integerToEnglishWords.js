/*
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One" */
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  const lessThan20 = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety"
  ];
  const thousands = ["", "Thousand", "Million", "Billion"];

  if (num === 0) {
    return "Zero";
  }
  let res = "";
  let thousandsIndex = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      // Process thousands
      res = helper(num % 1000) + thousands[thousandsIndex] + " " + res ;
    }
    num = Math.floor(num/1000);
    thousandsIndex += 1;
  }

  function helper(n) {
    //Process less than thousands 1~999
    if (n === 0) {
      return "";
    } else if (n < 20) {
      return lessThan20[n] + " ";
    } else if (n < 100) {
      return tens[Math.floor(n / 10)] + " " + helper(n % 10);
    } else {
      return lessThan20[Math.floor(n / 100)] + " Hundred " + helper(n % 100);
    }
  }
  return res.trim();
};
