//  https://leetcode.com/problems/subsets/

var subsets = function(array) {
  if (array.length === 0) return [[]];

  const last = array.pop(); //last = 3
  let subs = subsets(array);  //subs = subsets([1,2])

  return subs.concat(subs.map(el => {
    let elCopy = el.slice(0);
    elCopy.push(last);
    return elCopy;
  }));
};