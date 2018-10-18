const unionOf=function(firstSet,secondSet){
  unionArray = joinArrays(firstSet,secondSet);
  return findUniqueElements(unionArray);
}

const intersectionOf = function (firstSet,secondSet){
  intersectedElements=[];
  for(number of firstSet){
    if(indexOfNumber(secondSet,number)>=0){
      intersectedElements.push(number);
    }
  }
  return intersectedElements;
}

const differenceOf=function(firstSet,secondSet){
  let differedElements=[];
  for(number of firstSet){
    if(indexOfNumber(secondSet,number)==-1){
      differedElements.push(number); 
    }
  }
  return differedElements;
}

const isSubset = function(firstSet,secondSet){
  for(number of secondSet){
    if(indexOfNumber(firstSet,number)==-1){
      return false;
    }
  }
  return true;
}

const joinArrays=function(firstSet,secondSet){
  joinedArray = firstSet;
  for(value of secondSet){
    joinedArray.push(value);
  }
  return joinedArray;
}
const findUniqueElements = function(numbers){
  uniqueArray = [];
  for(value of numbers){
    if(indexOfNumber(uniqueArray,value)==-1){
      uniqueArray.push(value);
    }
  }
  return uniqueArray;
}

const indexOfNumber = function(numbers,value){
  for(index=0;index<numbers.length;index++){
    if(numbers[index]==value){
      return index;
    }
  }
  return -1;
}


exports.unionOf=unionOf;
exports.intersectionOf=intersectionOf;
exports.isSubset=isSubset;
exports.joinArrays=joinArrays;
exports.differenceOf = differenceOf;
exports.findUniqueElements=findUniqueElements;
exports.indexOfNumber = indexOfNumber;
