// Set Mismatch


var findErrorNums = function(nums) {
   let array = -1
   let none = -1
   
       for (let i = 1; i <= nums.length; i++) {
   let sum = nums.filter(num => num === i).length
       array = sum === 2 ? i : array
       none = sum === 0 ? i : none
   }  
   return [array, none]
}