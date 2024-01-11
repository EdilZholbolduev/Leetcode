// Amount of Time for Binary Tree to Be Infected


var amountOfTime = function(root, start) {
   function dfs(node){
       if (node == null){
           return [-1, -Number.MAX_VALUE]
       }

       let [left,left_dist] = dfs(node.left)
       let [right,right_dist] = dfs(node.right)
       
       infect_time = Math.max(
               left,
               right,
               left + right_dist + 2,
               right + left_dist + 2,
               )
       

       if (left_dist < 0 && right_dist < 0){
           infect_time = Math.max(left,right)+1
       }
       
       let distance = Math.max(left_dist,right_dist)+1
       if (node.val == start){
           distance = 0
       }
       
       return [infect_time, distance]
   }

   let [answer,_] = dfs(root)
   return answer
};