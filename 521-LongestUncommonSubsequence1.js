var findLUSlength = function(a, b) {
  if(a == b) {
    return -1;
  }
  return Math.max(a.length, b.length);
};
console.log(findLUSlength('aba', 'cdc'))
