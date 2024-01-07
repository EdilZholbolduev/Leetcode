// Arithmetic Slices II - Subsequence


var numberOfArithmeticSlices = function(nums) {
   const number = nums.length;
   const memory = Array.from(({ length: number }), () => new Map());
   let total = 0;
   for (let j = 1; j < number; j++) {
       for (let i = 0; i < j; i++) {
           const leng = nums[j] - nums[i];
           const subSequenceOut = memory[i].get(leng) ?? 0;
           const subSeqenceNow = memory[j].get(leng) ?? 0;
           total += subSequenceOut;
           memory[j].set(leng, subSequenceOut + subSeqenceNow + 1);
       }
   }
   return total;
};