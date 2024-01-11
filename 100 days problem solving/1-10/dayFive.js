//Longest Increasing Subsequence



var lengthOfLIS = function(nums) {
   const inner = new Array(nums.length).fill(0);
   let innerSize = 0;

   for (const num of nums) {
       let l = 0, r = innerSize, val;

       while (l !== r) {
           val = (l + r) >> 1;

           inner[val] < num ? l = val + 1 : r = val;
       }

       inner[l] = num;

       innerSize += l === innerSize;
   }

   return innerSize;
};