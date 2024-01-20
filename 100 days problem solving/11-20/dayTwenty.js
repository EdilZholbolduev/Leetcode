// Sum of Subarray Minimums

var sumSubarrayMins = function(arr) {
   let m = Math.pow(10, 9) + 7
   let freeze = []
   let total = 0
       for (let i = 0; i <= arr.length; i++) {
           while (freeze.length > 0 && (i === arr.length || arr[i] < arr[freeze    [freeze.length - 1]])) {
   let j = freeze.pop()
       total = (total + arr[j] * (i - j) * (j - (freeze.length > 0 ? freeze[freeze.length - 1] : -1))) % m
       }
       freeze.push(i)  
   }
   return total
}