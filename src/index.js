
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length == 0){
    return [];
  } else {

  let result = matrix.map(function(item, index,){
    if (index % 2 != 0){
    return item.reverse();
    } else{
    return item;
    }
    })
    return matrix = result.flat();
  }
  }
  
