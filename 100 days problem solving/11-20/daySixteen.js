// Insert Delete GetRandom O(1)


var RandomizedSet = function() {
   this.capacity = new Set();
};

RandomizedSet.prototype.insert = function(val) {
   var out = this.capacity.has(val);
   if(!out) {this.capacity.add(val);}
   return !out;
};

RandomizedSet.prototype.remove = function(val) {
   return this.capacity.delete(val);
};


RandomizedSet.prototype.getRandom = function() {
   var ArraySet = Array.from(this.capacity);
   return ArraySet[Math.floor(ArraySet.length * Math.random())];
};