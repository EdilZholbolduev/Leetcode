// Minimum Number of Steps to Make Two Strings Anagram

var minSteps = function(s, t) {
   let sAnagram = {}
   let tAnagram = {}
   for(let i = 0; i < s.length; i++) {
       sAnagram[s[i]] = sAnagram[s[i]]+1  || 1
       tAnagram[t[i]] = tAnagram[t[i]]+1  || 1
   }
   let sum  = 0
   for( let x in sAnagram) {
       if(tAnagram[x]) {
           if(sAnagram[x] > tAnagram[x]) sum += sAnagram[x] - tAnagram[x]
       } else sum += sAnagram[x]
   }
   return sum
}