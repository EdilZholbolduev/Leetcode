// Number of Laser Beams in a Bank


var numberOfBeams = function(bank) {
   let left=0
   let exit=0
   for(let i=0;i<bank.length;i++){
       let array=bank[i].split('')
       let current=array.reduce((a,b)=>Number(a)+Number(b))
       if(current>0&&left==0)left=current
       else if(current>0){
           exit+=(left*current)
           left=current
       }
   }
   return exit
};