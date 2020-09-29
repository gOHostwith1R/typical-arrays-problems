//exports.min = 
exports.min = function min (array) {
  if(!(Array.isArray(array)) || array.length === 0) return 0
  return Math.min.apply(Math,array);
}

exports.max = function max (array) {
  if(!(Array.isArray(array)) || array.length === 0) return 0
  return Math.max.apply(Math,array);
}

exports.avg = function avg (array) {
  if(!(Array.isArray(array)) || array.length === 0) return 0
  let average = 0;
  array.forEach(element => {
      average +=element;
  });
  average = average / array.length;
  return average;
}

//console.log(min([2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27]));
//console.log(max([2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27]));
