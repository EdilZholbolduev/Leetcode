// Climbing Stairs 

var climbStairs = function(n) {
   let a = 0;
   let b = 1;

   for (let i = 1; i <= n; i++) {
       let ways = a + b;
       a = b;
       b = ways;
   }

   return b;
}