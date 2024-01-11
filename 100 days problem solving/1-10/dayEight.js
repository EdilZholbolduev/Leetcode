// Range Sum of BST


var rangeSumBST = function(root, low, high) {
   let arrayNode = [];
   arrayNode.push(root);
   let totalSum = 0;
   for (let i = 0; i < arrayNode.length; i++) {
       if (arrayNode[i].left) arrayNode.push(arrayNode[i].left);
       if (arrayNode[i].right) arrayNode.push(arrayNode[i].right);
       if (arrayNode[i].val >= low && arrayNode[i].val <= high) {
           totalSum += arrayNode[i].val;
       }
   }
   return totalSum;
};