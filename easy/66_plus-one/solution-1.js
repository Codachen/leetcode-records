/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return (parseInt(digits.join(''))+1).toString().split('').map(i => parseInt(i));
};

// 思路
// 1. 將digits轉成合併數字
// 2. 數字+1
// 3. 轉回陣列，並將陣列元素都轉回數字型別


/**
 *  Code Review by ChatGPT
 *  你的解法雖然在大部分情況下可行，但不適用於大數字，
 *  因為 parseInt(digits.join('')) 會受到 JavaScript 數字精度限制（JavaScript 的 number 型別是 IEEE 754 雙精度浮點數，超過 2^53 - 1 會失去精確度）。
 *  例如：
 *  console.log(plusOne([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]));
*/