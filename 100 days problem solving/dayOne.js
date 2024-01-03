// Assign Cookies
var findContentChildren = function(g, s) {
   let contentChildren = 0;
   
           g.sort((a, b) => a - b);
           s.sort((a, b) => a - b);
           let gi = 0, si = 0;
           while (gi < g.length && si < s.length) {
               if (s[si] >= g[gi]) {
                   contentChildren++;
                   gi++;
               }
               si++;
   };
   return contentChildren;}