// Find Players With Zero or One Losses

var findWinners = function(matches) { 
   const value = {}
   const noLose = []
   const lostOneGame = []
   for(let [celebration,lostOneGame] of matches){
       if(!value[celebration]) value[celebration] = 0 
       value[lostOneGame] = (value[lostOneGame] || 0) + 1
   }
   for(let key of Object.keys(value)){
       if(value[key]===0) noLose.push(+key)
       else if(value[key]===1) lostOneGame.push(+key)
   } 
  
  let callback = (a,b) => a-b
   return [noLose.sort(callback),lostOneGame.sort(callback)]
};