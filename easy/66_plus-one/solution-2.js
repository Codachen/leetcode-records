/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(i = digits.length - 1; i >= 0; i--){
         if(digits[i] < 9){
             digits[i] += 1;
             return digits;
         }else{
             digits[i] = 0;
         }
    }
     return [1, ...digits]
};

/**
 * 這個解法的邏輯是從尾巴開始判斷，如果小於9就+1並且return結果，結束函式
 * 比較麻煩的是想如果遇到9怎麼辦，那應該要變成0且進位
 * 怎麼進位呢? 交給下一次的for迴圈來判斷，如果下一位小於9就會+1，如果還是9那就會傳承下去XD 傳聖火的概念
 * 如果傳到結束都沒有遇到小於9的情況，例如[9,9,9,9]，那就會變成[0,0,0,0]，
 * 這個時候就在最前面加1變成[1,0,0,0,0]就好了!
 * 比較少從結尾倒過來跑for迴圈，一度條件寫成i > 0讓digits[0] 沒被檢查到XDD
 */
