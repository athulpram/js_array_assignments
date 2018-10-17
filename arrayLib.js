const extractOddNumbers = function(numbers){
  let oddnumbers=[];
  for(let number of numbers){
    if(isOdd(number)){
      oddnumbers.push(number);
    }
  }
  return oddnumbers;
}

const extractEvenNumbers = function(numbers){
  let evenNumbers=[];
  for(let number of numbers){
    if(isEven(number)){
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const sumOfNumbers=function(numbers){
  let totalSum = 0
  for(let number of numbers){
    totalSum = totalSum + number;
  }
  return totalSum;
}

const isEven = function(number){
  return (number%2==0);
} 

const isOdd=function(number){
  return (number%2==1);
}

const reverseElements = function(numbers){
  let reversedNumbers=[];  
  for(let index=numbers.length-1;index>=0;index--){
    reversedNumbers.push(numbers[index]);
  }
  return reversedNumbers;
}

const extractAlternateElements = function(numbers){
  let alternateElements = [];
  for(let index=1;index<numbers.length;index+=2){
    alternateElements.push(numbers[index]);
  }
  return alternateElements;
}

const generateFibonacciSeries= function(limit){
  let firstNumber = 0;
  let secondNumber = 1;
  let generateFibonacciSeries = [];
  while(generateFibonacciSeries.length<limit){
    generateFibonacciSeries.push(firstNumber);
    let copyVariable = secondNumber;
    secondNumber += firstNumber;
    firstNumber = secondNumber;
  }
  return generateFibonacciSeries;
}

const reverseFibonacci=function(limit){
  return reverseElements(generateFibonacciSeries(limit));
}

const findGreatestNumber = function(numbers){
  let findGreatestNumber=0;
  for(let number of numbers){
    if(number > findGreatestNumber){
      findGreatestNumber = number;
    }
  }
  return findGreatestNumber;
}

const findLowestNumber = function(numbers){
  let findLowestNumber=numbers[0];
  for(let number of numbers){
    if(number < findLowestNumber){
      findLowestNumber = number;
    }
  }
  return findLowestNumber;
}

const findAverage = function(numbers){
  return sumOfNumbers(numbers)/numbers.length; 
}

const mapElements = function(names){
  lengthOfNames=[];
  for(let name of names){
    lengthOfNames.push(name.length);
  }
  return lengthOfNames;
}
const countOfOddNumber = function(numbers){
  let countOfOddNums = 0;
  for(let number of numbers){
    if(isOdd(number)){
      countOfOddNums++;
    }
  }
  return countOfOddNums;
}

const countOfEvenNumber = function(numbers){
  let countOfEvenNums = 0;
  for(let number of numbers){
    if(isEven(number)){
      countOfEvenNums++;
    }
  }
  return countOfEvenNums;
}

const countNumbersAboveValue = function(numbers,threshold){
  let numberCount = 0;
  for(let number of numbers){
    if(number > threshold){
      numberCount++;
    }
  }
  return numberCount;
}

const countNumbersBelowValue = function(numbers,threshold){
  let numberCount = 0;
  for(let number of numbers){
    if(number < threshold){
      numberCount++;
    }
  }
  return numberCount;
}

const indexOfNumber = function(numbers,value){
  for(index=0;index<numbers.length;index++){
    if(numbers[index]==value){
      return index;
    }
  }
  return -1;
}

const isAscending = function(numbers){
  for(index=1;index<numbers.length;index++){
    if(numbers[index-1]>numbers[index]){
      return false;
    }
  }
  return true;
}

const isDescending = function(numbers){
  for(index=1;index<numbers.length;index++){
    if(numbers[index-1]>numbers[index]){
      return false;
    }
  }
  return true;
}

const extractNumber=function(number){
  digitsOfNumber = [];
  while(number>0){
    digitsOfNumber.push(number%10);
    number = Math.floor(number/10);
  }
  return reverseElements(digitsOfNumber);
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

const unionOf=function(firstSet,secondSet){
  unionArray = joinArrays(firstSet,secondSet);
  return findUniqueElements(unionArray);
}

const joinArrays=function(firstSet,secondSet){
  joinedArray = firstSet;
  for(value of secondSet){
    joinedArray.push(value);
  }
  return joinedArray;
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

const zip = function(firstSet,secondSet){
  let zippedArray = [];
  for(index=0;index<firstSet.length;index++){
    zippedArray[index] = [firstSet[index],secondSet[index]]; 
  }
  return zippedArray;
}

const rotate = function(numbers,strtingIndex){
  let rotatedElements = [];
  let revNumbers = reverseElements(numbers);
  for(index=0;index<strtingIndex;index++){
    rotatedElements.push(revNumbers.pop());
  }
  return joinArrays(reverseElements(revNumbers),rotatedElements);
}

const partitionOf=function(numbers,threshold){
  let partitionedArray=[[],[]];
  for(number of numbers){
    partitionedArray[0].push(number);
    if(number>threshold){
      partitionedArray[1].push(number);
      partitionedArray[0].pop();
    }
  }
  return partitionedArray;
}

exports.partitionOf = partitionOf;
exports.rotate=rotate;
exports.zip = zip;
exports.isSubset=isSubset;
exports.differenceOf=differenceOf;
exports.intersectionOf=intersectionOf;
exports.unionOf=unionOf;
exports.findUniqueElements=findUniqueElements;
exports.extractNumber=extractNumber;
exports.isDescending=isDescending;
exports.isAscending=isAscending;
exports.indexOfNumber = indexOfNumber;
exports.countNumbersBelowValue=countNumbersBelowValue;
exports.countNumbersAboveValue =countNumbersAboveValue;
exports.countOfEvenNumber=countOfEvenNumber;
exports.countOfOddNumber=countOfOddNumber;
exports.mapElements=mapElements;
exports.extractEvenNumbers=extractEvenNumbers;
exports.extractOddNumbers=extractOddNumbers;
exports.sumOfNumbers = sumOfNumbers;
exports.reverseElements = reverseElements;
exports.reverseFibonacci = reverseFibonacci;
exports.extractAlternateElements =extractAlternateElements;
exports.findGreatestNumber=findGreatestNumber;
exports.findLowestNumber=findLowestNumber;
exports.findAverage = findAverage;
