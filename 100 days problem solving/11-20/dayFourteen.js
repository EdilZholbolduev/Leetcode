// Determine if Two Strings Are Close


var closeStrings = function(word1, word2) {
   let wordOne = new Array(26).fill(0);
   let wordTwo = new Array(26).fill(0);

   for(let char of word1)
       wordOne[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;

   for(let char of word2)
       wordTwo[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;

   for(let i=0; i<26; i++){
       if(wordOne[i] == 0 && wordTwo[i] != 0 || wordOne[i] != 0 && wordTwo[i] == 0)
           return false;
   }

   wordOne.sort((a, b) => a - b)
   wordTwo.sort((a, b) => a - b)

   return JSON.stringify(wordOne) === JSON.stringify(wordTwo);
};