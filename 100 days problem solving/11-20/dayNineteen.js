// Minimum Falling Path Sum


var minFallingPathSum = function(matrix) {
   let mSum = matrix.length;
   let fPath = Array.from({length: mSum}, () => new Array(mSum).fill(0));
   fPath[0] = matrix[0];
   for(let i = 1; i < mSum; i++) {
   for(let a = 0; a < mSum; a++) {
       fPath[i][a] = matrix[i][a] + Math.min(fPath[i-1][a], 
       fPath[i-1][Math.max(0, a-1)],
       fPath[i-1][Math.min(mSum-1, a+1)]);
       }
   }
   return Math.min(...fPath[mSum-1]);   
};