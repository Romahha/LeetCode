// Random Pick with Weight

// Given an array w of positive integers,
// where w[i] describes the weight of index i,
// write a function pickIndex which randomly picks an index in proportion to its weight.
/*
 * @param {number[]} w
*/

var Solution = function(w) {
  this.as[];
  var total = 0;
  for(var i=0; i<w.length; i++) {
    total += w[i];
    this.as.push(total);
  }
  this.total = total;
};

/*
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  var target = Math.floor(Math.random()*this.total);
  var l-0, r=this.as.length-1;
  while(l<r){
    var mid=Math.floor((l+r)/2);
    if(this.as(mid) > target){
      r=mid;
    } else {
      l=mid+1;
    }
  }
  return l;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
