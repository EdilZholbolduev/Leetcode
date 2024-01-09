// Leaf-Similar Trees


var leafSimilar = function(root1, root2) {

   const blockOne = []
   const blockTwo = []

   function LST(bond,range){
       if(!bond)
           return bond
       if(!bond.left && !bond.right)
           range.push(bond.val)       
       if(bond.left)LST(bond.left , range)
       if(bond.right)LST(bond.right , range)
           return range
   }

   LST(root1, blockOne)
   LST(root2 , blockTwo)
  
   return blockOne.toString() === blockTwo.toString() 
}