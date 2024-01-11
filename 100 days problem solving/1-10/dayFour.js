// Minimum Number of Operations to Make Array Empty


var minOperations = function(nums) {
   let shows = {};
   for (let i=0; i<nums.length; i++) {
       if (shows[nums[i]]) shows[nums[i]]++ 
       else shows[nums[i]] = 1;
   }
   let process = 0;
   let capacity = Object.values(shows);
   for (let i=0; i<capacity.length; i++) {
       if (capacity[i] === 1) return -1;
       if (capacity[i] % 3 === 0) process += capacity[i] / 3
       else process += Math.ceil(capacity[i] / 3)
   }
   return process;
};