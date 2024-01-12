// Determine if String Halves Are Alike


var halvesAreAlike = function(s) {
   let a = s.slice(0, s.length/2)
   let b = s.slice(s.length/2)
   let total = 0
   let sonant = "AEIOUaeiou"

   for (let i = 0; i < a.length; i++){
       if (sonant.includes(a[i]))
           total++
       if (sonant.includes(b[i]))
           total--
   }    
   return total === 0; 
};