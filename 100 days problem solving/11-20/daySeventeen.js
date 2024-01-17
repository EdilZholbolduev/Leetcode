// Unique Number of Occurrences

var uniqueOccurrences = function(arr) {
   let unique = {}

   for(let i of arr){
       if(!unique[i]) unique[i] = 0
       ++unique[i]
       }

   let occ = Object.values(unique)
   let out = new Set()

   for(let i of occ){
       if(out.has(i)) 
       return false
       out.add(i)
   }
   return true
}