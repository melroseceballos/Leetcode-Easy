/** THE PROBLEM
 * Given an integer array nums, 
 * return true if any value appears at least twice in the array,
 *  and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // check if the array even contains atleast two numbers
  if(!(nums.length >= 2)) return false
  // do the first loop so you may be able to set
  // left pointer variable
  // make sure it starts from the beginning of the array = 0
   for(let i=0; i<nums.length; i++ ){
    // store the iteration in the left Pointer variable
    let left = nums[i];
    // create another loop to set right pointer
    // make sure to use i + 1 and not left + 1 because you want to add 1
    // to the position not the value
    for (let j = i + 1; j<nums.length; j++){
        // store the right pointer variable
        let right = nums[j]
        // create a conditional to compare if any of the value are the same
        // if it is return true
        if(left === right){
            return true
           }
    }
  } 
  // otherwise, return false
  return false
};

console.log(containsDuplicate([3,3]))