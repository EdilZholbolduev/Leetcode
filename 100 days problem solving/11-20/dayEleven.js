// Maximum Difference Between Node and Ancestor


var maxAncestorDiff = function(root) {
   let left = 0
       function diff(root){
           if(!root) return [0, 9999]
               const [max, min] = diff(root.left)
               const [MaX, MiN] = diff(root.right)
               const maxBond = Math.max(max, MaX)
               const minBond = Math.min(min, MiN)
           if(maxBond != 0 && minBond != 9999)
               left = Math.max(left, Math.max(Math.abs(maxBond-root.val), Math.abs(root.val-minBond)))
           return [Math.max(maxBond, root.val), Math.min(minBond, root.val)]
       }
       diff(root)
           return left
};