// Maximum Profit in Job Scheduling

var jobScheduling = function(startTime, endTime, profit) {
   const num = startTime.length
   const work = startTime.map((s, i) => [s, i]).sort((a,b) => a[0]-b[0])
   const maxProfit = Array(num+1).fill(0)
   for (let i = num; i--;) {
       let ends = endTime[work[i][1]]
       let calc = Math.min(i + 1, num - 1)
       let left = num - 1
       while (calc < left - 1) {
           let min = Math.floor((calc + left) / 2)
           if (work[min][0] < ends)
               calc = min + 1
           else
               left = min
       }
       if (work[calc][0] >= ends)
           min = calc
       else if (work[left][0] >= ends)
           min = left
       else
           min = num
       maxProfit[i] = Math.max(maxProfit[i + 1], profit[work[i][1]] + maxProfit[min])
   }
   return maxProfit[0]
};