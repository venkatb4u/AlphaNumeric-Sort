/*
 * Alpha-Numeric Sorting
 * Sort-Type: Merge
 * Complexity: O(n*log(n)) [even under worst-case]
 * Usage: [array].alphaNumSort()
 * @Author: Venkat
 * Licence: MIT
*/
Array.prototype.alphaNumSort = function () {
    var array = this,
        arrayLength = array.length;
    if (arrayLength <= 1) return array;
    var mid = arrayLength/2,
        left = array.slice(0, mid),
        right = array.slice(mid);
    return merge(left.alphaNumSort(), right.alphaNumSort());
}
function merge (left, right) {
    var result = [];
    while (left.length && right.length) {
        var isLeftNo = !isNaN(left[0]),
            isRightNo = !isNaN(right[0]);
        if (isLeftNo && isRightNo) { // when both the operands are Numbers
            parseInt(left[0]) <= parseInt(right[0]) ? result.push(left.shift()) :  result.push(right.shift());
        }
        else if (isLeftNo || isRightNo) { // when any one of the operands are Numbers
            (isLeftNo) ? result.push(left.shift()) :  result.push(right.shift()); // pushing in the number first followed by the string
        }
        else { // when both the operands are strings/alpha-num
            left[0].toLowerCase() <= right[0].toLowerCase() ? result.push(left.shift()) :  result.push(right.shift());
        }
    }
    while (left.length) 
        result.push(left.shift().toLowerCase());
    while (right.length)
        result.push(right.shift().toLowerCase());
    
    return result;
    
}

