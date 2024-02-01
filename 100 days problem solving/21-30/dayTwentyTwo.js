// Divide Array Into Arrays With Max Difference


var divideArray = function(nums, k) {

   let number = nums.length
       nums.sort((a,b) => a-b)
   let result = new Array(number/3)

   for (let i=0;i<number;i+=3){
       if (nums[i+2] - nums[i] > k){
           return []
       }
       result[i/3] = [nums[i],nums[i+1],nums[i+2]]
   }
   return result
};