// Revercesd Word

var reverseWords = function(s) {
    let str_revesed = ''
    let str_arr = s.split(' ')
    for (const iterator of str_arr) {
        for(var i = iterator.length -1; i >= 0; i--) {
            str_revesed += iterator[i]
        }
        str_revesed +=" "
    }

    return str_revesed.toLocaleLowerCase().trim()
}


// console.log(reverseWords("Let's take LeetCode contest"))
// console.log(reverseWords("God Ding"))


// Add 2 nums

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
};

